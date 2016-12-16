$(document).ready(function(){
  $('#textarea1').val('');
  $('#textarea1').trigger('autoresize');
  $('select').material_select();

  $('select').on('change', function(event){
    event.preventDefault()
    var $input = $('select[name=source]').val()
    getHeadlines($input)
    // submitData(articleObj.articleURL)
    console.log();
    $('#link').html('')
    getGif("moon")
  })

})

// var articleObj = {
//   articleURL: "",
//   gifURL: "",
//   concept: "",
//   keyword: "",
// }

//top headlines for ESPN https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=f6bb4aacff9f4af7a3669348fcb85237
//national geo https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=f6bb4aacff9f4af7a3669348fcb85237
//NY times https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=f6bb4aacff9f4af7a3669348fcb85237
function getHeadlines(urlBase){
  $.ajax({
    url: urlBase,
    type: 'GET',
    success: function(data){
      var art = data.articles
      for (var i = 0; i < art.length-1; i++) {
        var url = art[i].url
        var $a = $('<a class="col l4" id="gifLink'+i+'"></a>')
        $a.appendTo('#gif-here')
        $a.attr('href', url)

        // var $img = $('<img class="responsive-image">')
        // $img.attr('src', gif)
        // getGif("moon", url)
      }
      // var articleURL = data.articles[0].url
      // articleObj.articleURL = articleURL
      // submitData(articleURL)
      // linkGif(article1)
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
  $.ajax({
    url: urlBase,
    type: 'POST',
    success: function(data){
      var concept = data.concepts[0].text
      var keyword = data.keywords[0].text
      articleObj.concept = concept
      articleObj.keyword = keyword
      // getGif(concept+" "+keyword)
    }
  })
}

//http://api.giphy.com/v1/gifs/translate?s=superman&api_key=dc6zaTOxFJmzC
//use gify api to get a gif
function getGif(name){

  $.get("http://api.giphy.com/v1/gifs/translate?s="+name+"&api_key=dc6zaTOxFJmzC", function(e){
    var gif = e.data.images.original.url
      var $img = $('<img class="col l4">')
      $img.attr('src', gif)
      $('#gifLink0').append($img)
      console.log($img);
  })
  $.get("http://api.giphy.com/v1/gifs/translate?s="+name+"&api_key=dc6zaTOxFJmzC", function(e){
    var gif = e.data.images.original.url
      var $img = $('<img class="col l4">')
      $img.attr('src', gif)
      $('#gifLink1').append($img)
      console.log($img);
  })
}

//display the gif in section below
// function displayGif(gif, url){
//   var $a = $('<a id="gifLink"></a>')
//   $a.attr('href', url)
//   var $img = $('<img class="col l4">')
//   $img.attr('src', gif)
//
//   console.log($a);
//   $a.appendTo('#gif-here')
//   $img.appendTo('#gifLink')
// }




//search form goes in doc.ready
// $('form').on('submit', function(event){
//   event.preventDefault()
//   var $input = $("textarea")
//   var input = $input.val()
//   console.log(input)
//   submitData(input)
//   getGif(input)
//   $('gif').html('')
// })
