//contact

var form = document.querySelector('.contact-form');
var requireInputs = document.querySelectorAll('.require');
var messeg = document.getElementsByClassName('.messeg-none');
debugger
form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeAlerts();
    checkInputs();

});

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
       else{
        var messeg = document.getElementById('messeg');
        messeg.className = 'messeg';
        setInterval(function(){
            messeg.className = 'messeg-none';
        }, 4000);
       }
    }
    if (emptyInputs === 0) {
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