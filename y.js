const openBtn = document.getElementById('openDrawer');
const drawer = document.getElementById('drawer');
const closeBtn = document.getElementById('closeDrawer');
const overlay = document.getElementById('overlay');
const noteInput = document.getElementById('noteInput');

// OPEN
openBtn.onclick = () => {
  drawer.classList.add('open');
  overlay.classList.add('show');
  noteInput.focus(); // keyboard pops up
}

// CLOSE - 3 ways
function closeDrawer() {
  drawer.classList.remove('open');
  overlay.classList.remove('show');
}

closeBtn.onclick = closeDrawer;
overlay.onclick = closeDrawer; // click outside to close





// Contact Form Validation

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  
  e.preventDefault();
  
  const inputs = form.querySelectorAll("input, textarea");
  
  let isEmpty = false;
  
  inputs.forEach(input => {
    
    if (input.value.trim() === "") {
      isEmpty = true;
    }
    
  });
  
  if (isEmpty) {
    
    alert("Please fill all fields.");
    
    return; }
  
  alert("Thank You! We will contact you soon.");
  
  
  form.reset();
  
});



// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
  ".grey"
);

function revealOnScroll() {
  
  revealElements.forEach(element => {
    
    const top = element.getBoundingClientRect().top;
    
    const windowHeight = window.innerHeight;
    
    if (top < windowHeight - 100) {
      
      element.classList.add("active");
      
    }
    
  });
  
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
