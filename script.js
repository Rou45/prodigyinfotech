window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#fff'; // Change to desired color when scrolled
    } else {
      navbar.style.backgroundColor = '#333'; // Change to original color when not scrolled
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Change navbar background color on scroll
    window.addEventListener('scroll', function() {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
      } else {
        navbar.style.backgroundColor = '#333';
      }
    });
  
    // Smooth scrolling
    const links = document.querySelectorAll('#navbar a');
    for (const link of links) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjusted for fixed navbar
          behavior: 'smooth'
        });
      });
    }
  });
  
  