$(document).on('turbolinks:load', function(){
    function buildHTML(message) {
      var img = message.image ? `<img src= ${ message.image }>` : "";
      var html = `<div class="message" date-id="${message.id}">
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
                      ${content}
                    </p>
                    <p>
                      ${img}
                    </p>
                  </div>`
      return html
    }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var message = new FormData(this);
      var url = (window.location.href);
      $.ajax({
        url: url,
        type: 'POST',
        data: message,
        dataType: 'json',
        processData: false,
        contentType: false
      })
    .done(function(data){

      function scrollBottom(){
        var target = $('.messages').last();
        var position = target.offset().top + $('.chat-main__messages').scrollTop();
        $('.chat-main__messages').animate({scrollTop: position}, 1000, 'swing');
      }

        var html = buildHTML(data);
        $('.chat-main__messages').append(html);
        $('#message_content').val('');
        scrollBottom();
      })

      .fail(function(data){
        alert('エラーが発生したためメッセージは送信できませんでした。');
      })
      .always(function(data){
        $('.chat-main__form__new-message__submit-btn').prop('disabled', false);
      })
    })
  })