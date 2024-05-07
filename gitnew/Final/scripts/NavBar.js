document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.createElement('div');
  navbar.id = 'navbar';
  navbar.style.position = 'fixed';
  navbar.style.top = '0';
  navbar.style.left = '0';
  navbar.style.width = '100%';
  navbar.style.height = '60px'; // Maintained the taller navbar
  navbar.style.backgroundColor = '#2c2c2c';
  navbar.style.color = '#646464';
  navbar.style.display = 'flex';
  navbar.style.alignItems = 'center';
  navbar.style.justifyContent = 'flex-start'; // Left alignment maintained for consistency with the text links
  navbar.style.padding = '10px 20px';
  navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.5)';
  navbar.style.zIndex = '1000';

  // Ensure font style and size are consistent across different pages and unaffected by external CSS
  navbar.style.fontFamily = 'Arial, sans-serif'; // Ensures font consistency
  navbar.style.fontSize = '16px'; // Ensures font size consistency

  // Adding the logo (image) to the left of the navbar
  const logo = document.createElement('img');
  logo.src = '../media/the_nations_eye_logo.png'; // Place the correct path to your image here
  logo.alt = 'Logo';
  logo.style.height = '40px'; // Adjusting the logo size. You can customize it as needed
  logo.style.marginRight = '20px'; // Adds some space between the logo and the links
  navbar.appendChild(logo); // Appending the logo to the navbar

  const linksContainer = document.createElement('div');
  linksContainer.style.display = 'flex';
  linksContainer.style.justifyContent = 'flex-start'; // Keeps the links on the left
  linksContainer.style.flexGrow = '1';

  const links = [
    { href: 'home.html', text: 'Home' },
    { href: 'forums.html', text: 'Forums' },
    { href: 'currentEvents.html', text: 'Current Events' },
    { href: 'enlistPage.html', text: 'Enlist' },
  ];

  links.forEach((link, index) => {
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.textContent = link.text;
    anchor.style.color = '#d4d4d4';
    anchor.style.textDecoration = 'none';
    anchor.style.marginLeft = index === 0 ? '0px' : '20px'; // Adjusts spacing for the first link
    // Applying font styling directly to links to ensure consistency
    anchor.style.fontFamily = 'Arial, sans-serif'; // Matching the navbar font family for consistency
    anchor.style.fontSize = '16px'; // Matching the navbar font size for consistency
    linksContainer.appendChild(anchor);
  });

  navbar.appendChild(linksContainer); // Append linksContainer to navbar
  document.body.prepend(navbar); // Place navbar at the beginning of the body

  // Added margin on the forum page 
  const forumSection = document.querySelector('.forumstuff');
  forumSection.style.marginTop = navbar.offsetHeight + 'px';
  
});