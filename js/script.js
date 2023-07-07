// JavaScript code

// Function to handle navigation menu click events
function handleMenuClick() {
    // Perform actions when a menu item is clicked
    console.log("Menu item clicked");
    // You can add your desired actions here, such as scrolling to the respective section
  }
  
  // Get the navigation menu items
  const menuItems = document.querySelectorAll("nav ul li a");
  
  // Add click event listeners to each menu item
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", handleMenuClick);
  });

  // JavaScript code

// Function to handle hover effect on cards
function handleCardHover(event) {
    const card = event.target;
    card.classList.add("card-hover"); // Add a CSS class for the hover effect
  }
  
  // Function to handle mouseleave event on cards
  function handleCardLeave(event) {
    const card = event.target;
    card.classList.remove("card-hover"); // Remove the CSS class for the hover effect
  }
  
  // Get the cards
  const cards = document.querySelectorAll(".card");
  
  // Add event listeners to each card
  cards.forEach((card) => {
    card.addEventListener("mouseenter", handleCardHover);
    card.addEventListener("mouseleave", handleCardLeave);
  });
  