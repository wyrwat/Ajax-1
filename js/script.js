var url = 'https://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
getJoke();

button.addEventListener('click', function(){
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
    var xhr = new XMLHttpsRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
      var response = JSON.parse(xhr.response);
      paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
  }