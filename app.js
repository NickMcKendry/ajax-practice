$(document).ready(function() {
  $('button').click(function(){
    getMovie()

  })
  })
    console.log('ready')
    $.get('http://www.omdbapi.com/?t=rambo', function(data) {
        console.log(data)
    })

    function getMovie(){
      var url = "http://www.omdbapi.com/?t=rambo"
      url += $('input').val()
      $.get(url, function(data){
        console.log(url);
      })
    }
    function updatePage(title) {
      $('body').append(title)
    }
  
