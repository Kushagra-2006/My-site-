const toggle = document.querySelector(".menu-toggle");
const close = document.querySelector(".menu-close");
const navbar = document.querySelector(".nav-bar-for");

toggle.addEventListener("click",function(){
  toggle.style.display="none"
  close.style.display="block"
  navbar.style.display="block"
})
close.addEventListener("click",function(){
  toggle.style.display="block"
  close.style.display="none"
  navbar.style.display="none"
})




  window.addEventListener("DOMContentLoaded", function () {
      // get the form elements defined in your form HTML above
    
      var form = document.getElementById("my-form");
      // var button = document.getElementById("my-form-button");
      var status = document.getElementById("status");
    
      // Success and Error functions for after the form is submitted
    
      function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks!";
        setTimeout(() => {
          
        }, 2000);
      }
    
      function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
        setTimeout(() => {
          
        }, 2000);
      }
    
      // handle the form submission event
    
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
    });
    
    // helper function for sending an AJAX request
    
    function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          success(xhr.response, xhr.responseType);
        } else {
          error(xhr.status, xhr.response, xhr.responseType);
        }
      };
      xhr.send(data);
    }
