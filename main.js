$(document).ready(function(){
  $('#textarea1').val('');
  $('#textarea1').trigger('autoresize');
  getHeadlines()
  $('form').on('submit', function(event){
    event.preventDefault()
    var $input = $("textarea")
    var input = $input.val()
    console.log(input)
    submitData(input)
    getGif(input)
    $('gif').html('')
  })
})


//http://api.giphy.com/v1/gifs/translate?s=superman&api_key=dc6zaTOxFJmzC
//use gify api to get a gif
function getGif(name){
  $.get("http://api.giphy.com/v1/gifs/translate?s="+name+"&api_key=dc6zaTOxFJmzC", function(e){
    var gif = e.data.images.original.url
    displayGif(gif)
    console.log(gif);
  })
}

//display the gif in section below
function displayGif(gif){
  var $img = $('<img>')
  $img.attr('src', gif)
  $img.appendTo('#gif-here')
}

//top headlines for ESPN
//https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=f6bb4aacff9f4af7a3669348fcb85237
function getHeadlines(){
  var urlBase = "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=f6bb4aacff9f4af7a3669348fcb85237"
  $.ajax({
    url: urlBase,
    type: 'GET',
    success: function(data){
      submitData(data.articles[0].url)
      console.log(data.articles[0].url);
    }
  })
}


//url emotion  http://gateway-a.watsonplatform.net/calls/url/URLGetEmotion
//text emotion http://gateway-a.watsonplatform.net/calls/text/TextGetEmotion
//combimed call http://gateway-a.watsonplatform.net/calls/text/TextGetCombinedData
//combined url call http://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData
//get watson data
function submitData(input){
  var urlBase = "http://gateway-a.watsonplatform.net/calls/url/URLGetCombinedData?"
  var apiKey = "343e1202eb6e7df968370a53ac17261a0c64658c"
  urlBase = urlBase+"apikey="+apiKey+"&url="+encodeURIComponent(input)+"&outputMode=json"
  console.log(encodeURIComponent(input))

  $.ajax({
    url: urlBase,
    type: 'POST',
    success: function(data){
      var concept = data.concepts[0].text
      var keyword = data.keywords[0].text
      var keyword1 = data.keywords[1].text
      var keyword2 = data.keywords[2].text

      getGif(concept+" "+keyword)
      console.log(data);
    }
  })

}
