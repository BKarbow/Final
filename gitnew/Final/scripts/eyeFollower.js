document.addEventListener("DOMContentLoaded", function() {
    const eyeContainer = document.getElementById('eye-container');
    const pupil = document.getElementById('pupil');
  
    function movePupil(e) {
      const eyeRect = eyeContainer.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  
      const mouseX = e.clientX - eyeCenterX;
      const mouseY = e.clientY - eyeCenterY;
  
      const angle = Math.atan2(mouseY, mouseX);
      const distance = Math.min(eyeRect.width / 20, eyeRect.height / 20); // Adjusted distance for more precise tracking
  
      const offsetX = Math.cos(angle) * distance;
      const offsetY = Math.sin(angle) * distance;
  
      // Adjusting pupil's size and position relative to eye size
      const eyeWidth = eyeRect.width;
      const eyeHeight = eyeRect.height;
      const pupilSize = 0.05; // Adjust this value to control the pupil size relative to the eye
  
      pupil.style.width = `${eyeWidth * pupilSize}px`;
      pupil.style.height = `${eyeHeight * pupilSize}px`;
  
      pupil.style.transform = `translate(calc(${offsetX}px - 50%), calc(${offsetY}px - 50%))`;
    }
  
    // Initial position
    movePupil({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
  
    document.addEventListener('mousemove', movePupil);
});