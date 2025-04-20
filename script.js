// The Page Loader Section=========
window.addEventListener('load', function() {
    const preLoader = document.querySelector('.preloader');
    preLoader.classList.add('fade-out');
    setTimeout(() => {
        preLoader.style.display = 'none'
    }, 1000)
});
  

// The Mobile Nav=========================
const ham = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a'); // fixed

ham.addEventListener('click', function () {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinksItems.forEach(item => {
  item.addEventListener('click', function () {
    ham.classList.remove('active');
    navLinks.classList.remove('active');
  });
});



  // The Sticky Header ==================
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });


  // The Active Nav Links ==================
  document.addEventListener('DOMContentLoaded', function (){
    const sections = document.querySelectorAll('section');
    const navLinksItems = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function(){
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(this.pageYOffset >= sectionTop -300 && pageYOffset < sectionTop + sectionHeight -300){
                current = section.getAttribute('id');
            }
        });
        navLinksItems.forEach(item => {
            item.classList.remove('active');
            if(item.getAttribute('href') === `#${current}`){
                item.classList.add('active')
            }
        });
    });
  });



  // Text Typing =================
  const text =document.querySelector('.sec-text');
  const textLoad = () =>{
    setTimeout(() =>{
        text.textContent = "Freelance Developer"
    }, 0);
    setTimeout(() =>{
        text.textContent = "Web Developer"
    }, 4000);
    setTimeout(() =>{
        text.textContent = "App Developer"
    }, 8000);
    setTimeout(() =>{
        text.textContent = "Graphic Designer"
    }, 12000);
  }
  textLoad();
  setInterval(textLoad, 16000)

  
  // The Skills Section=================

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.skill-card');
  
    cards.forEach(card => {
      const targetDegree = parseInt(card.getAttribute('data-degree'));
      const color = card.getAttribute('data-color');
      const bar = card.querySelector('.progress-bar');
      let degree = 0;
  
      bar.style.backgroundColor = color;
  
      const interval = setInterval(() => {
        degree++;
        bar.style.width = degree + '%';
        if (degree >= targetDegree) {
          clearInterval(interval);
        }
      }, 15);
    });
  });



  //The Portfolio Section ========================

  const filterBtn = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  filterBtn.forEach(button => {
    button.addEventListener('click', function () {
        filterBtn.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        portfolioItems.forEach(item => {
            if(filterValue === 'all' || item.getAttribute('data-category') === filterValue){
                item.style.display = 'block';
            }else{
                item.style.display = 'none'
            }
        })
    })
 })


 // The Testimonials Section
 const testi = document.querySelectorAll('.testimonial-slide');
 const slideBtn = document.querySelectorAll('.slider-btn');
 
 // Get the actual number of slides that can be safely shown
 const totalSlides = Math.min(testi.length, slideBtn.length);
 
 let currentSlide = 0;
 
 function showSlide(index) {
   if (index >= totalSlides) {
     console.warn("Slide or button not found at index:", index);
     return;
   }
 
   testi.forEach(slide => slide.classList.remove('active'));
   slideBtn.forEach(button => button.classList.remove('active'));
 
   testi[index].classList.add('active');
   slideBtn[index].classList.add('active');
   currentSlide = index;
 }
 
 slideBtn.forEach((button, index) => {
   if (index < totalSlides) {
     button.addEventListener('click', () => {
       showSlide(index);
     });
   }
 });
 
 if (totalSlides > 0) {
   setInterval(() => {
     currentSlide = (currentSlide + 1) % totalSlides;
     showSlide(currentSlide);
   }, 5000);
 }
 

//The Contact Form Section=====================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log({name, lastName, email, subject, message});

    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});