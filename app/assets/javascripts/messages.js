$(document).on('turbolinks:load', function(){
    function buildHTML(message) {
      var content = message.content ? `${ message.content }` : "";
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
        var html = buildHTML(data);
        $('.chat-main__messages').append(html);
        $('#message_content').val('');

        var $target = $('.chat-main__messages');
        $target.animate({scrollTop: $target.height()}, 1000);

        // function test(){
        //   var a = document.documentElement;
        //   var y = a.scrollHeight - a.clientHeight;
        //   window.scroll(0, y);
        // }

      })
      .fail(function(data){
        alert('エラーが発生したためメッセージは送信できませんでした。');
      })
    })
  })



// $("html,body").animate({scrollTop:$('セレクタ').offset().top});

  // });
  // var num = 0;
  // $('#add').on('click', function() {
  //   $('#target').append('<p>' + (num++) + '</p>');

  //   $('#target').animate({scrollTop: $('#target')[0].scrollHeight}, 'fast');

//   // scrolldown()

//   var $target = $('html,body');
// $target.animate({scrollTop: $target.height()}, 1000);



        // var $target = $('html,body');
        // $target.animate({scrollTop: $target.height()}, 1000);
        // $(".chat-main__messages").animate({ scrollTop: $("#myID").scrollTop() }, 1000);