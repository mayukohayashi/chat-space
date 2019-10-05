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
      var message = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: 'POST',
        data: message,
        dataType: 'json',
        processData: false,
        contentType: false
      })
    .done(function(data){

        var html = buildHTML(data);
        $('.chat-main__messages').append(html);
        $('#message_content').val('');
        $('.chat-main__messages').animate({scrollTop: $('.chat-main__messages')[0].scrollHeight});
    })

      .fail(function(data){
        alert('エラーが発生したためメッセージは送信できませんでした。');
      })

      .always(function(data){
        $('.chat-main__form__new-message__submit-btn').prop('disabled', false);
      })
    })


    $(function() {

    });
        function reloadMessages() {
          //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
          last_message_id = ※※※

          $.ajax({
            //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
            url: ※※※,
            //ルーティングで設定した通りhttpメソッドをgetに指定
            type: 'get',
            dataType: 'json',
            //dataオプションでリクエストに値を含める
            data: {id: last_message_id}
          })

          .done(function(messages) {
            if(messages !=)


          })

          .fail(function() {
            alert('自動更新に失敗しました')
          });
        };

})