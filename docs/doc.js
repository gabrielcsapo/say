$(window).ready(function() {
    $(".description").typed({
        strings: ["When words aren't enough"],
        typeSpeed: 100,
        onStringTyped: function() {
            document.querySelector('.description').innerHTML = require('saywhat').encode(document.querySelector('.description').innerHTML);
        }
    });
});
