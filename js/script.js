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

function apiRequest(address){
  $.ajax({
    url: "http://mikahouse.webhop.me/api?q=" + address ,
    dataType: 'jsonp',
    success: function(response){
      $.each(this, function(index,data){
        $('#returned-data').append(data.name);
      })
    }
  });
}

function navigation(){
  var shadePosition = $('#shade').position();
  if ( shadePosition.left == 0){
    $("#shade").css('left','-100vw');
    $("#shade").css('opacity','0');
    $('#navPanel').css('left','-321px');
  } else {
    $("#shade").css('left','0px');
    $("#shade").css('opacity','.3');
    $('#navPanel').css('left','0px');
  }
}

$("#navBar, #shade, .shady").click(function(){
  navigation();
});

function readView(content, title){
  var view = $('#view-container');
  $(view).load(content);
  $("#title").html(title)
}

function changeView(elementId){
  switch (elementId) {
    case "Media Center":
      readView('views/mediacenter.html', elementId);
      break;
    case "Music":
      readView('views/music.html', elementId);
      break;
    case "Minecraft":
      readView('views/minecraft.html', elementId);
      break;
    case "Controls":
      readView('views/controls.html', elementId);
      break;
    case "Security":
      readView('views/security.html', elementId);
      break;
    case "Services":
      readView('views/services.html', elementId);
      break;
    case "Climate":
      readView('views/climate.html', elementId);
      break;
    case "Notifications":
      readView('views/notifications.html', elementId);
      break;
    default:
      readView('views/home.html', elementId);
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

    // element argument can be a selector string
    //   for an individual element
    var msnry = new Masonry( '.grid', {
      // options
    });
}
