/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const openDropdown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  console.log(event.target);
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".dropdown-icon")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
