const url ="https://api.sampleapis.com/coffee/hot"
const title = document.getElementById("suggestiondrink")
const description = document.getElementById("suggestiondescription")

$(document).ready(function () {
    //on click for <a> element
    $("#suggestionbutton").click(function() {
        $.getJSON(url,function(data) {
            const random =Math.floor(Math.random() * data.length) + 1
            title.innerHTML=data[random].title
            description.innerHTML=data[random].description
          
})
  
    });
}); 

