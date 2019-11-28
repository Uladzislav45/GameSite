//slider
$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        autoplay: true
    });
});





//scroll

var smoothJumpUp = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -500);
        setTimeout(smoothJumpUp, 20);
    }
}

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 550) {
        document.getElementById('upbutton').style.display = 'block';
    } else {
        document.getElementById('upbutton').style.display = 'none';
    }
};





//contact

var form = document.querySelector('.contact-form');
var requireInputs = document.querySelectorAll('.require');
var messeg = document.getElementsByClassName('.messeg-none');
var btn = document.getElementById('btn');



function check(event) {
    event.preventDefault();
    removeAlerts();
    checkInputs();

}


function checkInputs() {
    var emptyInputs = 0;
    for (var i = 0; i < requireInputs.length; i++) {
        if (!requireInputs[i].value) {
            emptyInputs++;
            var errorMsg = document.createElement('span');
            errorMsg.classList.add('help-block');
            errorMsg.innerHTML = 'Enter text';
            requireInputs[i].classList.add('errorMsg');
            requireInputs[i].parentElement.insertBefore(errorMsg, null);
        }
    }
    if (emptyInputs === 0) {
        var messeg = document.getElementById('messeg');
        messeg.className = 'messeg';
        setInterval(function () {
            messeg.className = 'messeg-none';
        }, 4000);
        btn.className ='btn-contact_disabled';
        btn.setAttribute('disabled', true);
        form.reset();
        
        return true;
    } else {
        return false;
    }
}

function removeAlerts() {
    var alerts = document.querySelectorAll('.help-block');
    for (var i = 0; i < alerts.length; i++) {
        alerts[i].remove();
    }
    for (var i = 0; i < requireInputs.length; i++) {
        requireInputs[i].classList.remove('errorMsg');
    }
}


 


 



//gallery

$(document).ready(function() {
    $("#lightGallery").lightGallery({
        mode:"fade",
        speed:800,
        caption:true,
        desc:true,
        mobileSrc:true
    });
}); 




