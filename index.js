function switchPage(pageName) {
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    
    
    document.getElementById(pageName + 'Page').classList.remove('hidden');
    
    
    
    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('text-white');
        btn.classList.remove('text-yellow-500');
    });
    document.getElementById(pageName + 'Btn').classList.add('text-yellow-500');
}


window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('intro-animation').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 3000); 
});


(function(){
    emailjs.init("3R4hJweBGZJUUCmov"); // replace with your actual public key from EmailJS
  })();

  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    emailjs.sendForm("service_6edapyy", "template_dn6c7of", this)
      .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("Failed to send message: " + JSON.stringify(error));
      });
  });
