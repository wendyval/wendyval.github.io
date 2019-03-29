// Below is for when the toggle button is clicked
let toggleBtn = document.getElementById("toggle");
let overlayEffect = document.getElementById("overlay");

toggleBtn.addEventListener("click", function() {
    toggleBtn.classList.toggle("active");
    overlayEffect.classList.toggle("open");
});


// Below is so the content fades in when scrolling
$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();  
    var pageBottom = pageTop + $(window).height();
    var tags = $("main section, .card");

    for (var i = 0; i < tags.length; i++) { 
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("visible");
        }
        else {
            $(tag).removeClass("visible");
        }
    }
}) 


// Below is to update the year in the footer
let date = new Date();
let currentYear = date.getFullYear();
document.getElementByid("year").innerHTML = currentYear;