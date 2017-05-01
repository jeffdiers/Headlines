$(document).ready(function(){
  console.log();
  $('select').material_select();


  $('select').on('change', function(event){
    event.preventDefault()
    var $input = $('select[name=source]').val()
    $('.img-card-main').html('')
    getObject($input)
  })
  // $('.small').on('change', function(event){
  //   event.preventDefault()
  //   var $input = $('select[name=source]').val()
  //   $('.img-card-main').html('')
  //   getObject($input)
  // })
})



function getObject(url){
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data){
      var art = data.articles
      console.log();
      // var img = art[i].urlToImage
      // var title = art[i].title
      // var url = art[i].url
      // var description = art[i].description

      for (var i = 0; i < art.length-2; i++){
        var date = Date(art[i].publishedAt)
        // var month = date.getMonth()
        // var day = date.getDate()
        // var year = date.getYear()
        // var publishedAt = month+"/"+day+"/"+year
        console.log();
        console.log();
        var revealSub = $('<div class="container row">'+
      '<h1>'+art[i].title+'</h1>'+
      '<div class="col s12 l8">'+
      '<div class="border img-container gutter clickMe">'+
      '<div class="bg-img show" style="background-image: url('+art[i].urlToImage+')">'+
      '</div>'+
      '</div><br>'+
      '</div>'+
      '<div class="col s12 l4">'+
      '<div class="border headline-box ">'+
      '<div class="padding-20"><h5>Description</h5><p>'+art[i].description+'</p>'+
      '<div id="author-here'+i+'"></div>'+
      '</div>'+
      '<div class="header-box flex-row">'+
      '<h5 class="valign center" style="width: 100%;"><a class="read" href="'+art[i].url+'">read article</a></h5>'+
      '</div>'+
      '</div>'+
      '</div>'+
      '</div><br><br>'+
      '<div class="black-line-divider margin">'+
      '</div><br>')

        revealSub.appendTo('.img-card-main')
        author(art[i].author, i)
        getGifEmotion(art[i].url, i)
        getGifTitle(art[i].title, i)

      }



    }
  })
}



function author(input, i){
  if(input === null){
    console.log();
  }else {
    var $author = $("<p>Author: "+input+"</p>")
    console.log();
    $author.appendTo('#author-here'+i)
    console.log();
  }

}

function getGifEmotion(urlInput, i){
  console.log();
  var urlBase = "https://gateway-a.watsonplatform.net/calls/url/URLGetEmotion?"
  var apiKey = "7f599ecd40daf191a2bceb2c6cf05a4cbf9546a7"
  urlBase = urlBase+"apikey="+apiKey+"&url="+encodeURIComponent(urlInput)+"&outputMode=json"
  $.ajax({
    url: urlBase,
    type: 'POST',
    success: function(data){
      obj = data.docEmotions
      var emotion = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
      emotion = "this makes me feel "+emotion

      console.log(emotion);
      $.get("https://api.giphy.com/v1/gifs/translate?s="+emotion+"&api_key=dc6zaTOxFJmzC", function(e){
        gif = e.data.images.original.url
        var $img = $('<img>')
        $img.attr('src', gif)
        // $img.attr('max-width', '100px')
        $img.attr('class', 'gif')
        $img.appendTo('#giphy-here'+i)
        console.log();
      })
    }
  })
}

function getGifTitle(title, i){
  $.get("https://api.giphy.com/v1/gifs/translate?s="+title+"&api_key=dc6zaTOxFJmzC", function(e){
    gif = e.data.images.original.url
    var $img = $('<img>')
    $img.attr('src', gif)
    // $img.attr('max-width', '30%')
    $img.attr('class', 'gif')
    $img.appendTo('#giphy-here'+i)
    console.log();
  })
}
