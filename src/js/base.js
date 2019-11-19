var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

setInterval(function () {
    plusSlide();
}, 3000);
//contact



// var form = document.querySelector('.contact-form');
// var requireInputs = document.querySelectorAll('.require');

// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     removeAlerts();
//     checkInputs();
// });

// function checkInputs() {
//     var emptyInputs = 0; 
//       for (var i = 0; i < requireInputs.length; i++) {
//           if(!requireInputs[i].value) {
//             var formValid = true;
//            emptyInputs++;
//            var errorMsg = document.createElement('span');
//            errorMsg.classList.add('help-block');
//            errorMsg.innerHTML = 'Enter text'; 
//            requireInputs[i].classList.add('errorMsg');
//            requireInputs[i].parentElement.insertBefore(errorMsg, null);
//           } 
//              }
//              if (emptyInputs === 0) {
//              return true; 
//            } else {
//              var formValid = false;
//                return false;
//            }
//   if(formValid){
    
//   }
//    }
//    function removeAlerts() {
//     var alerts = document.querySelectorAll('.help-block');
// for(var i = 0; i < alerts.length; i++) {
//     alerts[i].remove();
// }
// for(var i = 0; i < requireInputs.length; i++) {
//     requireInputs[i].classList.remove('errorMsg');
// }
// }





// var email = document.getElementById('email');
// email.onkeypress = function(e) {   
//   let prohibited = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
// 	var key = String.fromCharCode(e.which);
//   if(prohibited.indexOf(key) >= 0){
// 		console.log('invalid key pressed');    
//    	return false;
//   }
//   return true;    
// };

// var name = document.getElementById('name');
// name.onkeypress = function(e) {   
//   var prohibited = "!@#$%^&*()№+=;:`~\|'?/.><,\"0123456789";
// 	var key = String.fromCharCode(e.which);
//   if(prohibited.indexOf(key) >= 0){
// 		console.log('invalid key pressed');    
//    	return false;
//   }
//   return true;    
// };

// var phone = document.getElementById('phone');
// phone.onkeypress = function(e) {   
//   var prohibited = /^\d[\d\(\)\ -]{4,14}\d$/;
// 	var key = String.fromCharCode(e.which);
//   if(prohibited.indexOf(key) >= 0){
// 		console.log('invalid key pressed');    
//    	return false;
//   }
//   return true;    
// };



