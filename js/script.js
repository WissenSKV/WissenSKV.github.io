// Функция для увеличения и отображения количества посетителей
/*
function updateVisitorCount() {

  let count = parseInt(localStorage.getItem('visitorCount')) || 0;

  count++;

  localStorage.setItem('visitorCount', count);

  document.getElementById('visitorCount').innerText = `Visitors: ${count}`;
}

updateVisitorCount();

*/





 function filterProjects(language) {

    var projects = document.querySelectorAll('.cc-porfolio-image');


    if (language === 'all') {
      projects.forEach(function (project) {
        project.style.display = 'block';
      });
    } else {

      projects.forEach(function (project) {
        project.style.display = 'none';
      });


      var selectedProjects = document.querySelectorAll('[data-language="' + language + '"]');
      selectedProjects.forEach(function (project) {
        project.style.display = 'block';
      });
    }
  }






function validateAndSubmit() {
    var form = document.getElementById("contactForm");
    var isValid = form.checkValidity();

    if (isValid) {
      var name = form.elements["name"].value;
      var subject = form.elements["Subject"].value;
      var email = form.elements["_replyto"].value;
      var message = form.elements["message"].value;

      if (name.trim() !== "" && subject.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
        $('#successModal').modal('show');
        setTimeout(function () {
          $('#successModal').modal('hide');
          form.reset();
        }, 2000);
      } else {
        alert("Please fill in all the required fields.");
      }
    } else {
      alert("Please fill in all the required fields.");
    }
  }







$(document).ready(function() {
  AOS.init( {

  });
});


$('a.smooth-scroll')
.click(function(event) {

  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {

      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {

        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});
