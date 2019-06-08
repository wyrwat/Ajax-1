var url = 'https://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
getJoke();

button.addEventListener('click', function(){
  getJoke();
});

var lowKick = "Chuck Norris is unable to connect to server ";
var paragraph =  lowKick;

function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function(){
      var response = JSON.parse(xhr.response);
      paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
  }
