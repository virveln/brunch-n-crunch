'use strict';

 //scrollspy on nav-menu
 /*Listen for when site is scrolling*/
window.addEventListener('activate.bs.scrollspy', function() {
    /*target the a-element when it's active */
    const navelement = document.querySelector('#mynavbar li>a.active').getAttribute('href');
    /*add an activated class to the found element */
    document.querySelector(navelement).classList.add("activated");
});


// To get shadow under navbar when scrolling down
const navbar = document.querySelector('.navbar');
/*Listen for when the scroll is more than 0, if so add a navbar-shadow-class*/
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-shadow');
  } else {
    navbar.classList.remove('navbar-shadow');
  }
});

//Change text on button "See event deals" if its clicked or not
const buttonDeals = document.querySelector('.deals-btn');
buttonDeals.addEventListener('click', function() {
    if(buttonDeals.textContent == "show event deals")
        buttonDeals.textContent = "hide event deals";
    else
        buttonDeals.textContent = "show event deals";
});

//To show more text on about us when clicked on "read-more" text
const button = document.querySelector('.read-more-btn');
const readMoreText = document.querySelector('.read-more-text');
/*Listen for when button is clicked and then add more text and hide the button*/
button.addEventListener('click', function() {
  readMoreText.style.display = 'block';
  button.style.display = 'none';
});


//Alert after sending form
const form = document.querySelector('form');
const alertMessage = "Thank you for your email, we'll answer you shortly!\nHope we see you soon!";
/*Listen for when form is submitted and showing an alert with the email info*/
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const emailSelect = formData.get('email-select');
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  alert(`${alertMessage}\n\nYou have selected to email: ${emailSelect}\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});



