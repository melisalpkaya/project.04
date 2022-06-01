$(document).ready(function () {
    //on click for <a> element
    $("#nav_list li").click(function() {
        var title = $(this).children("a").attr("title");
        var filename = "json_files/"+title+".json";
        consumeJSON(filename);
    });
}); // end ready
function consumeJSON(jsonFileURL) {
    $.ajax({
        url: jsonFileURL,
        //handle as text
        dataType: "text",
        success: function (data) {
            //data downloaded + pass data
            var json = $.parseJSON(data);
            // display results
            $("main > h2").html(json.campaigns[0].topic);
            $("main > h1").html(json.campaigns[0].title);
            $("main > img").attr("src", json.campaigns[0].image);
            $("main > p").html(json.campaigns[0].text);
        }
    });
}