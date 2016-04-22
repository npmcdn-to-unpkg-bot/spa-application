$(document).ready(function(){
  changeView('Welcome');
});

function apiRequest(address){
  $.ajax({
    url: "http://mikahouse.webhop.me/api?q=" + address ,
    dataType: 'jsonp',
    success: function(data){
      return "collection:" + data;
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
      readView('server.js', elementId);
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
