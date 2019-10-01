$(document).on('turbolinks:load', function() {
    $(function(){
    function buildHTML(create) {
      var content = create.content ? `${ create.content }` : "";
      var img = create.image ? `<img src= ${ create.image }>` : "";
      var html = `<div class="message">
                  <div class="message__upper-info">
                    <p class="message__upper-info__chatter">
                      ${create.user_name}
                    </p>
                    <p class="message__upper-info__date">
                      ${create.created_at}
                    </p>
                  </div>
                    <p class="message__text">

                    </p>
                    <p class="message__text__content">
                      ${create.content}
                    </p>
                    <p>
                      ${create.img}
                    </p>
                  </div>`
      return html
    }
    $('#new_message').on('submit', function(e){
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(create){
        var html = buildHTML(create);
        $('.chat-main__messages').append(html);
        $('.message').val('')
        debugger
      })
      .fail(function(create){
        alert('エラーが発生したためメッセージは送信できませんでした。');
      })
    })
  })
})