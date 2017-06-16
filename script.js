$(document).ready(function() {
    
    var results = [];
    
    
    var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';
    
    
    document.getElementById("searchquery")
        .addEventListener("keyup", function(event){
        event.preventDefault();
        if(event.keyCode == 13) {
            let query = $('#searchquery').val();
            
            var i = 1;
            
            $.ajax({
                url: api+query+cb,
                type:'GET',
                contentType: 'application/json',
                dataType: "jsonp",
                success: function(response) {
                    var myStr = "";
                    $.each(response.query.pages, function(i, pages) {
                    $("ul").append('<li>'+this.title+'<br>'+this.extract+'</li>')
                        
                    }); 
                }
            });
        }
    });
            
            
    $(".random-button").on('click', function() {
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    });
    
});