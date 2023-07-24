// Function to change the toggle from Menu to close 

function toggleMenu(){

  let toggleMenuElement = document.getElementsByClassName("toggleMenu")[0];

  toggleMenuElement.classList.toggle("active");

  let navigation = document.getElementsByClassName("navigation")[0];

  navigation.classList.toggle("active");
};






