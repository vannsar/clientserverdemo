$(document).ready( startApp );

function startApp(){
  getData();
  getFoodData();
}

function getData() {
  var settings = {
    url: '../server/getnames.json',
    method: 'get',
    dataType: 'json',
    success: handleDataFromServer
  }
  $.ajax(settings);
}

function getFoodData() {
  var settings = {
    url: '../server/getfood.json',
    method: 'get',
    dataType: 'json',
    success: handleDataFromServer
  }
  $.ajax(settings);
}

function handleDataFromServer( response ){
  console.log(response);
}

function handleFoodFromServer ( response ){
  console.log(response);
}
