$(document).ready(function(){
  $('#textarea1').val('');
  $('#textarea1').trigger('autoresize');
  $('select').material_select();

  // Initialize collapse button
  // $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  $('select').on('change', function(event){
    event.preventDefault()
    var $input = $('select[name=source]').val()
    $('.img-card-main').html('')
    $('.img-card-sub-1').html('')
    $('.img-card-sub-2').html('')
    $('.img-card-sub-3').html('')
    getObject($input)
  })

  // var gif = {}
  // getGif('superman')
  // console.log(gif);
})



//use News api to iterate through top stories
function getObject(url){
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data){
      var art = data.articles
      console.log();
      // for (var i = 0; i < art.length-7; i++){
      //   var revealSub = $('<div class="col s12 l4 center bottom"><div class="card  hoverable sticky-action"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+art[i].urlToImage+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+art[i].title+'<i class="material-icons right">more_vert</i></span></div><div class="card-action"><a href="'+art[i].url+'">read</a></div><div id="giphy-here'+i+'" class="card-reveal"><span class="truncate card-title grey-text text-darken-4">'+art[i].title+'<i class="material-icons right">close</i></span><p>'+art[i].description+'</p><br></div></div></div>')
      //   getGifIndex(art[i].title, i)
      //   revealSub.appendTo('.img-card-sub-1')
      // }
      // for (var i = 3; i < art.length-4; i++) {
      //
      //   var revealSub = $('<div class="col s12 l4 center bottom"><div class="card  hoverable sticky-action"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+art[i].urlToImage+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+art[i].title+'<i class="material-icons right">more_vert</i></span></div><div class="card-action"><a href="'+art[i].url+'">read</a></div><div id="giphy-here'+i+'" class="card-reveal"><span class="truncate card-title grey-text text-darken-4">'+art[i].title+'<i class="material-icons right">close</i></span><p>'+art[i].description+'</p><br></div></div></div>')
      //   getGifIndex(art[i].title, i)
      //   revealSub.appendTo('.img-card-sub-2')
      // }
      // for (var i = 6; i < art.length-1; i++){
      //
      //   var revealSub = $('<div class="col s12 l4 center bottom"><div class="card  hoverable sticky-action"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+art[i].urlToImage+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+art[i].title+'<i class="material-icons right">more_vert</i></span></div><div class="card-action"><a href="'+art[i].url+'">read</a></div><div id="giphy-here'+i+'" class="card-reveal"><span class="truncate card-title grey-text text-darken-4">'+art[i].title+'<i class="material-icons right">close</i></span><p>'+art[i].description+'</p></div></div></div>')
      //   getGifIndex(art[i].title, i)
      //   revealSub.appendTo('.img-card-sub-3')
      // }
      for (var i = 0; i < art.length-1; i++){
        console.log(art);
        var revealSub = $('<div class="col s8  show">'+
        '<div class="card hoverable sticky-action">'+
        '<div class="card-image waves-effect waves-block waves-light">'+
        '<img class="activator" src="'+art[i].urlToImage+'">'+
        '</div>'+
        '<div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4 ">'+art[i].title+'<i class="material-icons right">more_vert</i>'+
        '</span>'+
        '</div>'+
        '<div class="card-action">'+
        '<a href="'+art[i].url+'">read</a>'+
        '</div>'+
        '<div class="card-reveal center">'+
        '<span class="truncate card-title grey-text text-darken-4">'+art[i].title+'<i class="material-icons right">close</i></span>'+
        '<p>'+art[i].description+'</p>'+
        '<h5>How will reading this article make you feel?</h6>'+
        '<div id="giphy-here'+i+'"></div>'+
        '<p>Published at: '+Date(art[i].publishedAt)+'</p>'+
        '<div id="author-here'+i+'"></div>'+
        '</div>'+
        '</div>'+
        '</div>')

        revealSub.appendTo('.img-card-main')
        // getGifEmotion(art[i].url, i)
        getGifTitle(art[i].title, i)
        author(art[i].author, i)
      }


    }
  })

}

function author(input, i){
  if(input === null){
    console.log('null');
  }else {
    var $author = $("<p>Author: "+input+"</p>")
    console.log(input);
    $author.appendTo('#author-here'+i)
    console.log($author);
  }

}

// function getGif(input){
//   $.get("https://api.giphy.com/v1/gifs/translate?s="+input+"&api_key=dc6zaTOxFJmzC", function(e){
//     gif = e.data.images.original.url
//     var $img = $('<img>')
//     $img.attr('src', gif)
//     $img.appendTo('#giphy-here')
//     console.log('sane');
//   })
// }



// function imgPost(artImg, artUrl i){
//   if(input === null){
//     var urlBase = "https://gateway-a.watsonplatform.net/calls/url/URLGetRankedConcepts?"
//     var apiKey = "7f599ecd40daf191a2bceb2c6cf05a4cbf9546a7"
//     urlBase = urlBase+"apikey="+apiKey+"&url="encodeURIComponent(artUrl)+"&outputMode=json"
//     $.ajax({
//       url: urlBase,
//       type: 'POST',
//       success: function(data){
//
//       }
//     })
//   }
// }

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
        // $img.attr('max-width', '30%')
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




//supld key 7f599ecd40daf191a2bceb2c6cf05a4cbf9546a7
//gmail key 343e1202eb6e7df968370a53ac17261a0c64658c
// function submitData(input){
//   var urlBase = "http://gateway-a.watsonplatform.net/calls/url/URLGetEmotion?"
//   var apiKey = "7f599ecd40daf191a2bceb2c6cf05a4cbf9546a7"
//   urlBase = urlBase+"apikey="+apiKey+"&url="+encodeURIComponent(input)+"&outputMode=json"
//   $.ajax({
//     url: urlBase,
//     type: 'POST',
//     success: function(data){
//       data.docEmotion = obj
//       var emotion = Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
//       console.log(Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b }));
//     }
//   })
// }

//display img
// function displayImg(img){
//   var el = $('<div class="row"><div class="col s12 m7"><div class ="card small"><div class="card-image"><img src='+img+'><span class="card-title">'+title+'</span></div><div class="card-content"><p>'+description+'</div><div class="card-action"><a href='+url+'>Link</a></div></div></div></div>')
// }
