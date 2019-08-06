$(document).ready( startApp );

function startApp(){
  getData();
  getFoodData();
}

function getData() {
  var settings = {
    url: 'http://localhost:3001/names/',
    method: 'get',
    dataType: 'json',
    success: handleDataFromServer
  }
  $.ajax(settings);
}

function getFoodData() {
  var settings = {
    url: 'http://localhost:3001/favfoods/',
    method: 'get',
    dataType: 'json',
    success: handleDataFromServer
  }
  $.ajax(settings);
}

function handleDataFromServer( response ){
  console.log(response);
  for (var index = 0; index < response.length; index++){
    var nameDiv = $('<div>').text(response[index].name);
    $('body').append(nameDiv);
  }
}

function handleFoodFromServer ( response ){
  console.log(response);
}
