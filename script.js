 // Navigation toggle for mobile menu
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
});

//for the cursor
window.addEventListener('mousemove', function(e){
  var arr = [1, 0.9, 0.8, 0.5, 0.2];

  arr.forEach(function(i){
    var x = (1 - i)*75;
    var star = document.createElement('div');
    star.className = 'star';
    star.style.top = e.pageY + Math.round(Math.random()*x-x/2) + 'px';
    star.style.left = e.pageX + Math.round(Math.random()*x-x/2) + 'px';

    document.body.appendChild(star);

    window.setTimeout(function(){
      document.body.removeChild(star);
    }, Math.round(Math.random()*i*600));
  });
}, false);


console.log("script.js is loaded ");//to make the part is properly attached

