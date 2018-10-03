$( document ).ready(function(){
    console.log("document ready");

    var tvShows = ["Broad City", "Parks and Recreation", "Workaholics", "Reno911", "The Office" ];
    
    var queryURL = "https://api.giphy.com/v1/gifs/?t=" + tvShow + "api_key=SJjfjcdEWRuCuqwyuyF2ABKBsTyzyA2A";
    console.log("communication");

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

      });

    function renderButtons() {
        $("#showGifs").empty();
        for (var i = 0; i < tvShows.length; i++) {
            var a = $("<button>");
            a.addClass("show");
            a.attr("data-name", tvShows[i]);
            a.text(tvShows[i]);
            $("#showGifs").append(a);
        
        };


      $("#find-tv").on("click", function(event) {
        event.preventDefault();
        var tv = $("#tv-input").val();


      });

    });