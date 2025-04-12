// JavaScript code will go here
document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code will be executed after the DOM is fully loaded
});

// Initialize EmailJS
(function() {
  emailjs.init("g0dsA8jXxtRnpUBXX"); // Replace with your EmailJS public key
})();

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const statusDiv = document.querySelector('.form-status');
  const submitBtn = document.querySelector('.submit-btn');
  
  // Change button text and disable it
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  // Get form data
  const templateParams = {
    from_name: document.getElementById('fullName').value,
    from_email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    to_email: 'hiddenfirie@gmail.com'
  };

  // Send email using EmailJS
  emailjs.send('service_2jrlj77', 'template_xuc3bw8', templateParams) // Replace with your service and template IDs
    .then(function(response) {
      // Show success message
      statusDiv.className = 'form-status success';
      statusDiv.style.display = 'block';
      statusDiv.textContent = 'Message sent successfully!';
      
      // Reset form
      document.getElementById('contactForm').reset();
    }, function(error) {
      // Show error message
      statusDiv.className = 'form-status error';
      statusDiv.style.display = 'block';
      statusDiv.textContent = 'Failed to send message. Please try again.';
    })
    .finally(function() {
      // Reset button
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      
      // Hide status message after 5 seconds
      setTimeout(() => {
        statusDiv.style.display = 'none';
      }, 5000);
    });
}); 