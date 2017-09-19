const saywhat = require('saywhat');

window.onload = function() {
  document.querySelector('.description').innerHTML = '';

  var letters = "When words aren't enough!".split('');
  for(var i = 0; i < letters.length; i++) {
      setTimeout(function(c) {
          return function() { document.querySelector('.description').innerHTML = document.querySelector('.description').innerHTML + c; }
      }(letters[i]), 75 * i);
  }

  setTimeout(function() {
    document.querySelector('.description').innerHTML = saywhat.encode(document.querySelector('.description').innerHTML);
  }, (letters.length + 2) * 75)
}
