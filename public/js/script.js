$(window).load(function(){
   changeView('Welcome');
   masonize();
});

$(document).on('scroll', function(){
  var docTop = $(document).scrollTop();
  if(docTop > 30){
    $('#navBar').css('top','-5em');
  }else{
    $('#navBar').css('top','0');
  }
  var scrolled = $(window).scrollTop();
  $('#hero').css('top', -(scrolled * 0.2) + 'px');
})

function navigation(){
  var shadePosition = $('#shade').position();
  if ( shadePosition.left == 0){
    $("#shade").css('left','-100vw');
    $("#shade").css('opacity','0');
    $('#navPanel').css('left','-60vw');
  } else {
    $("#shade").css('left','0px');
    $("#shade").css('opacity','.3');
    $('#navPanel').css('left','0px');
  }
}

$("#navBar, #shade, .shady").click(function(){
  navigation();
});

function materialButton(elem){
  $(elem).addClass('materialEffect');
  setTimeout(function(){
    $(elem).removeClass('materialEffect');
  },1000)
}

function buttonFunc(elem){
  var startingPos = $(elem).position().left;
  if( startingPos == 0){
    $(elem).css('left','25px');
    $(elem).addClass('primary');
  }else{
    $(elem).css('left','0px');
    $(elem).removeClass('primary');
  }
}

function readView(content, title, hero){
  var view = $('#view-container');
  $(view).load(content);
  $("#title").html(title);
  $("#hero").css('background-image', hero);
}

function changeView(elementId){
  switch (elementId) {
    case "Media Center":
      readView('views/mediacenter.html', elementId, 'url(images/media.jpg)');
      break;
    case "Music":
      readView('views/music.html', elementId, 'url(images/music.jpg)');
      break;
    case "Minecraft":
      readView('views/minecraft.html', elementId, 'url(images/minecraft.jpg)');
      break;
    case "Controls":
      readView('views/controls.html', elementId, 'url(images/lighting.jpg)');
      break;
    case "Security":
      readView('views/security.html', elementId, 'url(images/security.jpg)');
      break;
    case "Services":
      readView('views/services.html', elementId, 'url(images/server.jpg)');
      break;
    case "Climate":
      readView('views/climate.html', elementId, 'url(images/landscape.jpg)');
      break;
    case "Notifications":
      readView('views/notifications.html', elementId, 'url(images/notifications.jpg)');
      break;
    default:
      readView('views/home.html', elementId, "");
  }
}

function masonize(){
    $('.card').addClass('grid-item');
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // options
      itemSelector: '.grid-item',
      columnWidth: 200
    });
    var msnry = new Masonry( '.grid', {
    });
}

function apiCall(call){
  $.ajax({
    url: "http://mikahouse.webhop.me/api?q=" + call,
    dataType: 'jsonp',
    jsonpCallback: call,
    success: function(jsonpCallback){
      console.log("success");
      // console.log("success");
    }
  });
}
