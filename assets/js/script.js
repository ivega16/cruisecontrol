var dropdowns = document.getElementsByClassName("dropdown-content"); //dropdown options for both buttons
var bahamasLI = document.getElementById("bahamas-btn") //bahamas dropdown option on button 1
var carribeanLI = document.getElementById("carribean-btn") //carribean dropdown option on button1
var cruisedaysLI = document.getElementById("4day-btn") //4-day cruise dropdown option on button2
var dropdownList1 = document.getElementById("myDropdown1") //dropdown for button 1
var dropdownList2 = document.getElementById("myDropdown2") //dropdown for button 2
var button1 = document.getElementById("button1") //button 1
var button2 = document.getElementById("button2") //button 2

//if active button is clicked, 
//then replace button text to dropdown list item

//submit will take in selected items for dropdown list 1 and dropdown list 2

//if option 1 is clicked, display itinerary 1
//if option 2 is clicked, display itinerary 2


function myFunction(element) {
    
    // element.nextSibling is the carriage return… The dropdown menu is the next next.
    var thisDropdown = element.nextSibling.nextSibling;
    
    if (!thisDropdown.classList.contains('show')) {  // Added to hide dropdown if clicking on the one already open
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
      }
    }
    
    // Toggle the dropdown on the element clicked
    thisDropdown.classList.toggle("show");
  }
  
  /* function to close the dropdown when clicked outside. */
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




