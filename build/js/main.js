$(function(){$(".owl-carousel").owlCarousel({items:1,margin:10,loop:!0,nav:!0,autoplay:!0})});var smoothJumpUp=function(){(0<document.body.scrollTop||0<document.documentElement.scrollTop)&&(window.scrollBy(0,-500),setTimeout(smoothJumpUp,20))};window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop;document.getElementById("upbutton").style.display=550<e?"block":"none"};var form=document.querySelector(".contact-form"),requireInputs=document.querySelectorAll(".require"),messeg=document.getElementsByClassName(".messeg-none"),btn=document.getElementById("btn");function check(e){e.preventDefault(),removeAlerts(),checkInputs()}function checkInputs(){for(var e=0,t=0;t<requireInputs.length;t++)if(!requireInputs[t].value){e++;var n=document.createElement("span");n.classList.add("help-block"),n.innerHTML="Enter the text",requireInputs[t].classList.add("errorMsg"),requireInputs[t].parentElement.insertBefore(n,null)}if(!/[^0-9\-\.]/gi.test(document.getElementById("name").value)){e++;var l=document.createElement("span");l.classList.add("help-block"),l.innerHTML="Enter a name in letters only",document.getElementById("name").classList.add("errorMsg"),document.getElementById("name").parentElement.insertBefore(l,null)}if(!/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}/g.test(document.getElementById("email").value)){e++;var o=document.createElement("span");o.classList.add("help-block"),o.innerHTML="xxxx@example.com",document.getElementById("email").classList.add("errorMsg"),document.getElementById("email").parentElement.insertBefore(o,null)}if(!/[^A-zА-яЁё]/.test(document.getElementById("phone").value)){e++;var r=document.createElement("span");r.classList.add("help-block"),r.innerHTML="375 xx xxx xx xx example",document.getElementById("phone").classList.add("errorMsg"),document.getElementById("phone").parentElement.insertBefore(r,null)}if(0!==e)return!1;var s=document.getElementById("messeg");return s.className="messeg",setInterval(function(){s.className="messeg-none"},4e3),btn.className="btn-contact_disabled",btn.setAttribute("disabled",!0),form.reset(),!0}function removeAlerts(){for(var e=document.querySelectorAll(".help-block"),t=0;t<e.length;t++)e[t].remove();for(t=0;t<requireInputs.length;t++)requireInputs[t].classList.remove("errorMsg")}$(document).ready(function(){$("#lightGallery").lightGallery({mode:"fade",speed:800,caption:!0,desc:!0,mobileSrc:!0})}),$(document).ready(function(){(new WOW).init()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm93bENhcm91c2VsIiwiaXRlbXMiLCJtYXJnaW4iLCJsb29wIiwibmF2IiwiYXV0b3BsYXkiLCJzbW9vdGhKdW1wVXAiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInNldFRpbWVvdXQiLCJvbnNjcm9sbCIsInNjcm9sbGVkIiwicGFnZVlPZmZzZXQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImZvcm0iLCJxdWVyeVNlbGVjdG9yIiwicmVxdWlyZUlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZXNzZWciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnRuIiwiY2hlY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlQWxlcnRzIiwiY2hlY2tJbnB1dHMiLCJlbXB0eUlucHV0cyIsImkiLCJsZW5ndGgiLCJ2YWx1ZSIsImVycm9yTXNnIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInBhcmVudEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJ0ZXN0IiwiZXJyb01zZyIsImVyck1zZyIsImVyck1lc2ciLCJjbGFzc05hbWUiLCJzZXRJbnRlcnZhbCIsInNldEF0dHJpYnV0ZSIsInJlc2V0IiwiYWxlcnRzIiwicmVtb3ZlIiwicmVhZHkiLCJsaWdodEdhbGxlcnkiLCJtb2RlIiwic3BlZWQiLCJjYXB0aW9uIiwiZGVzYyIsIm1vYmlsZVNyYyIsIldPVyIsImluaXQiXSwibWFwcGluZ3MiOiJBQUNBQSxFQUFFLFdBRVlBLEVBQUUsaUJBQ1JDLFlBQVksQ0FDWkMsTUFBTyxFQUNQQyxPQUFRLEdBQ1JDLE1BQU0sRUFDTkMsS0FBSyxFQUNMQyxVQUFVLE1BVWxCLElBQUlDLGFBQWUsWUFDZSxFQUExQkMsU0FBU0MsS0FBS0MsV0FBc0QsRUFBckNGLFNBQVNHLGdCQUFnQkQsYUFDeERFLE9BQU9DLFNBQVMsR0FBSSxLQUNwQkMsV0FBV1AsYUFBYyxNQUtqQ0ssT0FBT0csU0FBVyxXQUNkLElBQUlDLEVBQVdKLE9BQU9LLGFBQWVULFNBQVNHLGdCQUFnQkQsVUFFMURGLFNBQVNVLGVBQWUsWUFBWUMsTUFBTUMsUUFEL0IsSUFBWEosRUFDb0QsUUFFQSxRQVU1RCxJQUFJSyxLQUFPYixTQUFTYyxjQUFjLGlCQUM5QkMsY0FBZ0JmLFNBQVNnQixpQkFBaUIsWUFDMUNDLE9BQVNqQixTQUFTa0IsdUJBQXVCLGdCQUN6Q0MsSUFBTW5CLFNBQVNVLGVBQWUsT0FJbEMsU0FBU1UsTUFBTUMsR0FDWEEsRUFBTUMsaUJBQ05DLGVBQ0FDLGNBT0osU0FBU0EsY0FLTCxJQUpBLElBQUlDLEVBQWMsRUFJVEMsRUFBSSxFQUFHQSxFQUFJWCxjQUFjWSxPQUFRRCxJQUN0QyxJQUFLWCxjQUFjVyxHQUFHRSxNQUFPLENBQ3pCSCxJQUNBLElBQUlJLEVBQVc3QixTQUFTOEIsY0FBYyxRQUN0Q0QsRUFBU0UsVUFBVUMsSUFBSSxjQUN2QkgsRUFBU0ksVUFBWSxpQkFDckJsQixjQUFjVyxHQUFHSyxVQUFVQyxJQUFJLFlBQy9CakIsY0FBY1csR0FBR1EsY0FBY0MsYUFBYU4sRUFBVSxNQUc5RCxJQWJrQixlQWFETyxLQUFLcEMsU0FBU1UsZUFBZSxRQUFRa0IsT0FBUSxDQUMxREgsSUFDQSxJQUFJWSxFQUFVckMsU0FBUzhCLGNBQWMsUUFDckNPLEVBQVFOLFVBQVVDLElBQUksY0FDdEJLLEVBQVFKLFVBQVksK0JBQ3BCakMsU0FBU1UsZUFBZSxRQUFRcUIsVUFBVUMsSUFBSSxZQUM5Q2hDLFNBQVNVLGVBQWUsUUFBUXdCLGNBQWNDLGFBQWFFLEVBQVMsTUFFeEUsSUFwQmtCLHVDQW9CREQsS0FBS3BDLFNBQVNVLGVBQWUsU0FBU2tCLE9BQVEsQ0FFM0RILElBQ0EsSUFBSWEsRUFBU3RDLFNBQVM4QixjQUFjLFFBQ3BDUSxFQUFPUCxVQUFVQyxJQUFJLGNBQ3JCTSxFQUFPTCxVQUFZLG1CQUNuQmpDLFNBQVNVLGVBQWUsU0FBU3FCLFVBQVVDLElBQUksWUFDL0NoQyxTQUFTVSxlQUFlLFNBQVN3QixjQUFjQyxhQUFhRyxFQUFRLE1BSXhFLElBOUJtQixjQThCREYsS0FBS3BDLFNBQVNVLGVBQWUsU0FBU2tCLE9BQVEsQ0FDNURILElBQ0EsSUFBSWMsRUFBVXZDLFNBQVM4QixjQUFjLFFBQ3JDUyxFQUFRUixVQUFVQyxJQUFJLGNBQ3RCTyxFQUFRTixVQUFZLDJCQUNwQmpDLFNBQVNVLGVBQWUsU0FBU3FCLFVBQVVDLElBQUksWUFDL0NoQyxTQUFTVSxlQUFlLFNBQVN3QixjQUFjQyxhQUFhSSxFQUFTLE1BR3pFLEdBQW9CLElBQWhCZCxFQVlBLE9BQU8sRUFYUCxJQUFJUixFQUFTakIsU0FBU1UsZUFBZSxVQVNyQyxPQVJBTyxFQUFPdUIsVUFBWSxTQUNuQkMsWUFBWSxXQUNSeEIsRUFBT3VCLFVBQVksZUFDcEIsS0FDSHJCLElBQUlxQixVQUFZLHVCQUNoQnJCLElBQUl1QixhQUFhLFlBQVksR0FDN0I3QixLQUFLOEIsU0FFRSxFQU9mLFNBQVNwQixlQUVMLElBREEsSUFBSXFCLEVBQVM1QyxTQUFTZ0IsaUJBQWlCLGVBQzlCVSxFQUFJLEVBQUdBLEVBQUlrQixFQUFPakIsT0FBUUQsSUFDL0JrQixFQUFPbEIsR0FBR21CLFNBRWQsSUFBU25CLEVBQUksRUFBR0EsRUFBSVgsY0FBY1ksT0FBUUQsSUFDdENYLGNBQWNXLEdBQUdLLFVBQVVjLE9BQU8sWUFRMUNyRCxFQUFFUSxVQUFVOEMsTUFBTSxXQUNkdEQsRUFBRSxpQkFBaUJ1RCxhQUFhLENBQzVCQyxLQUFNLE9BQ05DLE1BQU8sSUFDUEMsU0FBUyxFQUNUQyxNQUFNLEVBQ05DLFdBQVcsTUFNbkI1RCxFQUFFUSxVQUFVOEMsTUFBTSxZQUNkLElBQUlPLEtBQU1DIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3NsaWRlclxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIE93bCBDYXJvdXNlbFxyXG4gICAgdmFyIG93bCA9ICQoXCIub3dsLWNhcm91c2VsXCIpO1xyXG4gICAgb3dsLm93bENhcm91c2VsKHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBtYXJnaW46IDEwLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlXHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy9zY3JvbGxcclxuXHJcbnZhciBzbW9vdGhKdW1wVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAwKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC01MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc21vb3RoSnVtcFVwLCAyMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBpZiAoc2Nyb2xsZWQgPiA1NTApIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBidXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwYnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL2NvbnRhY3RcclxuXHJcbnZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtZm9ybScpO1xyXG52YXIgcmVxdWlyZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXF1aXJlJyk7XHJcbnZhciBtZXNzZWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcubWVzc2VnLW5vbmUnKTtcclxudmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4nKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByZW1vdmVBbGVydHMoKTtcclxuICAgIGNoZWNrSW5wdXRzKCk7XHJcblxyXG5cclxufVxyXG4vLyAvXltcXHddezF9W1xcdy1cXC5dKkBbXFx3LV0rXFwuW2Etel17Miw0fS9naTtcclxuLy8gL1teYS16QS1aMC05XS9nO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tJbnB1dHMoKSB7XHJcbiAgICB2YXIgZW1wdHlJbnB1dHMgPSAwO1xyXG4gICAgdmFyIHBhdHRlcm5OYW1lID0gL1teMC05XFwtXFwuXS9naTtcclxuICAgIHZhciBwYXR0ZXJuTWFpbCA9IC9eW1xcd117MX1bXFx3LVxcLl0qQFtcXHctXStcXC5bYS16XXsyLDR9L2c7XHJcbiAgICB2YXIgcGF0dGVyblBob25lID0gL1teQS160JAt0Y/QgdGRXS87XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlcXVpcmVJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIXJlcXVpcmVJbnB1dHNbaV0udmFsdWUpIHtcclxuICAgICAgICAgICAgZW1wdHlJbnB1dHMrKztcclxuICAgICAgICAgICAgdmFyIGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKCdoZWxwLWJsb2NrJyk7XHJcbiAgICAgICAgICAgIGVycm9yTXNnLmlubmVySFRNTCA9ICdFbnRlciB0aGUgdGV4dCc7XHJcbiAgICAgICAgICAgIHJlcXVpcmVJbnB1dHNbaV0uY2xhc3NMaXN0LmFkZCgnZXJyb3JNc2cnKTtcclxuICAgICAgICAgICAgcmVxdWlyZUlucHV0c1tpXS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShlcnJvck1zZywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFwYXR0ZXJuTmFtZS50ZXN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKS52YWx1ZSkpIHtcclxuICAgICAgICBlbXB0eUlucHV0cysrO1xyXG4gICAgICAgIHZhciBlcnJvTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGVycm9Nc2cuY2xhc3NMaXN0LmFkZCgnaGVscC1ibG9jaycpO1xyXG4gICAgICAgIGVycm9Nc2cuaW5uZXJIVE1MID0gJ0VudGVyIGEgbmFtZSBpbiBsZXR0ZXJzIG9ubHknO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykuY2xhc3NMaXN0LmFkZCgnZXJyb3JNc2cnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVycm9Nc2csIG51bGwpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFwYXR0ZXJuTWFpbC50ZXN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikudmFsdWUpKSB7XHJcbiAgICAgICBcclxuICAgICAgICBlbXB0eUlucHV0cysrO1xyXG4gICAgICAgIHZhciBlcnJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZXJyTXNnLmNsYXNzTGlzdC5hZGQoJ2hlbHAtYmxvY2snKTtcclxuICAgICAgICBlcnJNc2cuaW5uZXJIVE1MID0gJ3h4eHhAZXhhbXBsZS5jb20nO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yTXNnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZXJyTXNnLCBudWxsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwYXR0ZXJuUGhvbmUudGVzdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lXCIpLnZhbHVlKSkge1xyXG4gICAgICAgIGVtcHR5SW5wdXRzKys7XHJcbiAgICAgICAgdmFyIGVyck1lc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgZXJyTWVzZy5jbGFzc0xpc3QuYWRkKCdoZWxwLWJsb2NrJyk7XHJcbiAgICAgICAgZXJyTWVzZy5pbm5lckhUTUwgPSAnMzc1IHh4IHh4eCB4eCB4eCBleGFtcGxlJztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGhvbmUnKS5jbGFzc0xpc3QuYWRkKCdlcnJvck1zZycpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVyck1lc2csIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbXB0eUlucHV0cyA9PT0gMCkge1xyXG4gICAgICAgIHZhciBtZXNzZWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2VnJyk7XHJcbiAgICAgICAgbWVzc2VnLmNsYXNzTmFtZSA9ICdtZXNzZWcnO1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWVzc2VnLmNsYXNzTmFtZSA9ICdtZXNzZWctbm9uZSc7XHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICAgICAgYnRuLmNsYXNzTmFtZSA9ICdidG4tY29udGFjdF9kaXNhYmxlZCc7XHJcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGVydHMoKSB7XHJcbiAgICB2YXIgYWxlcnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlbHAtYmxvY2snKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxlcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYWxlcnRzW2ldLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXF1aXJlSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVxdWlyZUlucHV0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvck1zZycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vZ2FsbGVyeVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIiNsaWdodEdhbGxlcnlcIikubGlnaHRHYWxsZXJ5KHtcclxuICAgICAgICBtb2RlOiBcImZhZGVcIixcclxuICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgIGNhcHRpb246IHRydWUsXHJcbiAgICAgICAgZGVzYzogdHJ1ZSxcclxuICAgICAgICBtb2JpbGVTcmM6IHRydWVcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vL2FuaW1hdGlvblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICBuZXcgV09XKCkuaW5pdCgpO1xyXG4gIH0pOyJdfQ==
