document.addEventListener('DOMContentLoaded', function() {
    const headerElements = document.querySelectorAll('.glitch .line h1');
    headerElements.forEach((header, index) => {
      // Ensure to only add counter to the specific container meant for kill count
      if(header.innerHTML.includes("Soldiers K.I.A. Today = ")) {
        let counterValue = 1260380 + (index * 10); // Example starting value
        header.innerHTML = "Soldiers K.I.A. Today = " + counterValue.toLocaleString();
      }
    });
  
    function updateCounter() {
        const increment = Math.floor(Math.random() * (3865 - 105 + 1)) + 105;
        headerElements.forEach((header, index) => {
          if(header.innerHTML.includes("Soldiers K.I.A. Today = ")) {
            let currentValue = parseInt(header.innerHTML.replace(/[^0-9]/g, '').replace(/\s/g, ''), 10);
            let newValue = currentValue + increment;
            header.innerHTML = "Soldiers K.I.A. Today = " + newValue.toLocaleString();
          }
        });
    }
  
    setInterval(updateCounter, 5);
  });