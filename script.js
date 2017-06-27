$(document).ready(function() {
    
    var results = [];
    
    var resultPage = 'https://en.wikipedia.org/?curid=';
    
    var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    var cb = '&callback=JSON_CALLBACK';

    
    document.getElementById("searchquery").addEventListener("keyup", function(){
        doSearch();
    });
    
    
    function doSearch() {
            
            var query = $("#searchquery").val();
            $("li").empty().remove();
        
            console.log(query);
            var i = 1;
            
            if(query !== "") {
            $.ajax({
                url: api+query+cb,
                type:'GET',
                contentType: 'application/json',
                dataType: "jsonp",
                success: function(response) {
                    var myStr = "";
                    $.each(response.query.pages, function(i, pages) {
                    var searchResultURL = resultPage+this.pageid;
                $(".result-listing").append('<li><a href='+searchResultURL+' <b>'+this.title+'</b><br>'+this.extract+'</a></li>')
                }); 
                }
            });
            }
            
    }

       
            
    $(".random-button").on('click', function() {
        window.open('https://en.wikipedia.org/wiki/Special:Random');
    });
    
});