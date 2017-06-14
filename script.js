$(document).ready(function() {
    
    var query = $('#searchquery').val();
    
  
    $(".random-button").on('click', function() {
        window.alert(query);
        //window.open('https://en.wikipedia.org/wiki/Special:Random');
    });
});