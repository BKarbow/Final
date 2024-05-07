const totalButterflies = 20;
butterflyCodesArray = ["- !6234<br>", "- !5261<br>", "- !4433<br>", "- !7532<br>"];
butterflyPageLinkArray = ["http://127.0.0.1:5500/Final/pages/home.html", "http://127.0.0.1:5500/Final/pages/hidden_eye.html", "http://127.0.0.1:5500/Final/pages/broken_link.html",
"http://127.0.0.1:5500/Final/pages/downloaded_image.html"];

// Function to increment the butterfliesFound variable when image is clicked
function incrementButterflies() {
  let butterfliesFound = localStorage.getItem('val_butterfliesFound');
  butterfliesFound = butterfliesFound ? parseInt(butterfliesFound) : 0;

  if (butterfliesFound <= totalButterflies) {
    butterfliesFound++;
  }

  if (butterfliesFound > totalButterflies) {
    butterfliesFound = totalButterflies;
  }

  if (window.location.href == "http://127.0.0.1:5500/Final/pages/resistance_home_page.html") {
    document.getElementById('butterfliesFound').textContent = butterfliesFound + " out of " + totalButterflies;
  }

  localStorage.setItem('val_butterfliesFound', butterfliesFound);
  const butterflyElement = document.getElementById('butterflyImage').style.display = 'none';
}

// On page load, retrieve the count from localStorage and update the UI
window.onload = function() {
  let butterfliesFound = localStorage.getItem('val_butterfliesFound');
  let foundButterflyArray = JSON.parse(localStorage.getItem('isButterflyFoundArray'));

  if (!foundButterflyArray) {
    foundButterflyArray = Array(totalButterflies).fill(0); // Initialize with 20 zeros
    localStorage.setItem('isButterflyFoundArray', JSON.stringify(foundButterflyArray));
  }

  if (window.location.href == "http://127.0.0.1:5500/Final/pages/resistance_home_page.html") {
    document.getElementById('butterfliesFound').textContent = butterfliesFound + " out of " + totalButterflies;
  }

  console.log(foundButterflyArray);
  checkAllFoundButterflies(foundButterflyArray);
};

function butterflyFound(butterfly_id) {
  let foundButterflyArray = JSON.parse(localStorage.getItem('isButterflyFoundArray'));
  if (foundButterflyArray) {
    foundButterflyArray[butterfly_id] = 1;
    localStorage.setItem('isButterflyFoundArray', JSON.stringify(foundButterflyArray));
  }

  alert("A new code has been found!");
}

function checkAllFoundButterflies(foundButterflyArray) {

  for (var i = 0; i < foundButterflyArray.length; i++) {
    if (foundButterflyArray[i] == 1 && window.location.href == butterflyPageLinkArray[i]) {
      document.getElementById(`butterfly-${i}`).style.display = 'none';
    }
  }

  butterflyCodes = "";
  for (var i = 0; i < foundButterflyArray.length; i++) {
    if (foundButterflyArray[i] == 1) {
      butterflyCodes += butterflyCodesArray[i];
    }
  }

  if (window.location.href == "http://127.0.0.1:5500/Final/pages/resistance_home_page.html") {
    document.getElementById('butterfly-codes').innerHTML = butterflyCodes;
  }
}





if (window.location.href == "http://127.0.0.1:5500/Final/pages/home.html") {
  document.getElementById('butterfly-0').addEventListener('click', function() { incrementButterflies(); butterflyFound(0); }); 
}

if (window.location.href == "http://127.0.0.1:5500/Final/pages/hidden_eye.html") {
  document.getElementById('butterfly-1').addEventListener('click', function() { incrementButterflies(); butterflyFound(1); }); 
}

if (window.location.href == "http://127.0.0.1:5500/Final/pages/broken_link.html") {
  document.getElementById('butterfly-2').addEventListener('click', function() { incrementButterflies(); butterflyFound(2); }); 
}

if (window.location.href == "http://127.0.0.1:5500/Final/pages/downloaded_image.html") {
  document.getElementById('butterfly-3').addEventListener('click', function() { incrementButterflies(); butterflyFound(3); }); 
}