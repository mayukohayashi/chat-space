$(function(){

  function buildHTML(message) {

    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = `<div class="message" data-group-id="${ message.group_id }" data-id="${ message.id }">
                  <div class="message__upper-info">
                    <p class="message__upper-info__chatter">
                      ${message.user_name}
                    </p>
                  <p class="message__upper-info__date">
                    ${message.created_at}
                  </p>
                </div>
                  <p class="message__text">
                  </p>
                  <p class="message__text__content">
                    ${message.content}
                  </p>
                  <p>
                    ${img}
                  </p>
                </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

  .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__messages').append(html);
      $('#new_message')[0].reset();
      $('.chat-main__form__new-message__submit-btn').prop('disabled', false);
      $('.chat-main__messages').animate({scrollTop: $('.chat-main__messages')[0].scrollHeight});
  })
  .fail(function(){
    alert('メッセージを入力して下さい');
    $('.chat-main__form__new-message__submit-btn').prop('disabled', false);
  })

  })

  $(function(){
    if(location.href.match(/\/groups\/\d+\/messages/)){
      setInterval(reloadMessages, 1000);
    }
  });
      function reloadMessages() {
        if($('.message')[0]) {
          var last_message_id = $('.message:last').attr('data-id');
          var group_id = $('.message').attr('data-group-id');
        } else {
          var last_message_id = 0;
        }
          url = '/groups/' + group_id + '/api/messages';

        $.ajax({
          url: url,
          type: 'GET',
          dataType: 'json',
          data: {id: last_message_id, group: group_id}
        })
        .done(function(messages) {
          // ここのmessagesはmessageでも動作します。
          if(messages != "null") {
            $.each(messages, function(i, message){
              var html = buildHTML(message);
          $('.chat-main__messages').append(html);
          $('.chat-main__messages').animate({scrollTop: $('.chat-main__messages')[0].scrollHeight});
        });
          }
        })
        .fail(function() {
          alert('自動更新に失敗しました')
        });
  }
});