$(document).on('turbolinks:load', function(){

  $('#user-search-field').on('keyup', function(e){
    var input = $("#user-search-field").val();
    console.log(input)
  });

});