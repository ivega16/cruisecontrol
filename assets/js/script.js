var dropdowns = document.getElementsByClassName("dropdown-content"); //dropdown options for both buttons
var westernLI = document.getElementById("westerncarribean-btn") //bahamas dropdown option on button 1
var carribeanLI = document.getElementById("carribean-btn") //carribean dropdown option on button1
var cruisedaysLI = document.getElementById("4day-btn") //4-day cruise dropdown option on button2
var dropdownList1 = document.getElementById("myDropdown1") //dropdown for button 1
var dropdownList2 = document.getElementById("myDropdown2") //dropdown for button 2
var button1 = document.getElementById("button1") //button 1
var button2 = document.getElementById("button2") //button 2
var arrowIcon1 = document.getElementById("icon1") //first icon on button 1
var arrowIcon2 = document.getElementById("icon2") //second icon on button 2
var submitBtn = document.getElementById("submit") //submit btn 
var itineraryHeader = document.getElementById("itinerary") //itinerary header
var itineraryTable = document.getElementById("itinerary-table") //itinerary table
var itineraryLocation1 = document.querySelector(".itinerary-location0")
var itineraryLocation2 = document.querySelector(".itinerary-location1")
var itineraryLocation3 = document.querySelector(".itinerary-location2")
var itineraryLocation4 = document.querySelector(".itinerary-location3")
var cruiseday1 = document.querySelector(".date-1")
var cruiseday2 = document.querySelector(".date-2")
var cruiseday3 = document.querySelector(".date-3")
var cruiseday4 = document.querySelector(".date-4")



//if active button is clicked, 
//then replace button text to dropdown list item

//submit will take in selected items for dropdown list 1 and dropdown list 2

//if option 1 is clicked, display itinerary 1
//if option 2 is clicked, display itinerary 2


function myFunction(element) {
    debugger
    // element.nextSibling is the carriage return… The dropdown menu is the next next.
    if(button1.classList.contains("active")&& button2.classList.contains("active")){
        itineraryHeader.classList.add("hidden")
        itineraryTable.classList.add("hidden")
        button1.textContent = "Destination" 
        button2.textContent = "Event Type"
        button1.classList.remove("active")
        button2.classList.remove("active")
   
    }
    
    var thisDropdown = element.nextSibling.nextSibling;
    
    if (!thisDropdown.classList.contains('show')) {  // Added to hide dropdown if clicking on the one already open
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show'); //shows dropdown list
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

dropdownList1.addEventListener("click", (e)=> {

    if (e.target === westernLI) {
        // arrowIcon1.style.transform = 'rotate(180deg)'
        button1.innerText = westernLI.textContent 

        button1.classList.add("active")

    } else if (e.target === carribeanLI) {
        button1.textContent = carribeanLI.innerHTML
        button1.classList.add("active")
    }
})

dropdownList2.addEventListener("click", (e)=> {
 
    if(e.target === cruisedaysLI) {
        button2.textContent = cruisedaysLI.innerHTML 
        button2.classList.add("active")
    }
} )

function SubmitFun() {
    if(button1.classList.contains("active") && button2.classList.contains("active")) {
        if(button1.textContent === "Southern Carribean") {
            itineraryHeader.classList.remove("hidden")
            itineraryTable.classList.remove("hidden")
        } else if(button1.textContent === "Western Carribean") {
                itineraryLocation1.textContent = "Mexico"
                itineraryLocation2.textContent = "Honduras"
                itineraryLocation3.textContent = "Costa Rica"
                itineraryLocation4.textContent = "Bahamas"
                itineraryHeader.classList.remove("hidden")
                itineraryTable.classList.remove("hidden")
                cruiseday1.textContent = "Friday, Sep. 1st 2023"
                cruiseday2.textContent = "Saturday, Sep. 2nd 2023"
                cruiseday3.textContent = "Sunday, Sep. 3rd 2023"
                cruiseday4.textContent = "Monday, Sep. 4th 2023"
                }
            }
        }

submitBtn.addEventListener("click", SubmitFun)

document.addEventListener("DOMContentLoaded", () => {
    const exchangeRatesEndpoint = "https://api.exchangerate-api.com/v4/latest/USD";
    const exchangeSection = document.getElementById("exchange-rates");
  
    async function fetchExchangeRates() {
      try {
        const response = await fetch(exchangeRatesEndpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates.");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error.message);
        return null;
      }
    }
  
    function showExchangeRates(data) {
      exchangeSection.innerHTML = "";
  
      if (!data) {
        exchangeSection.innerText = "Failed to fetch exchange rates. Please try again later.";
        return;
      }
  
      const { base, rates } = data;
      const currencies = Object.keys(rates);
      currencies.forEach((currency) => {
        const rate = rates[currency].toFixed(2);
        const countryName = getCountryName(currency);
        const rateElement = document.createElement("li");
        rateElement.innerText = `1 ${base} = ${rate} ${countryName ? countryName : currency}`;
        exchangeSection.appendChild(rateElement);
      });
    }
  
    async function updateExchangeRates() {
      exchangeSection.innerHTML = '<div class="loader"></div>';
  
      const data = await fetchExchangeRates();
      showExchangeRates(data);
    }
  
    function getCountryName(currencyCode) {
      const countryNames = {
        USD: "USD: United States",
        EUR: "EUR: Eurozone",
        GBP: "GBP: United Kingdom",
        JPY: "JPY: Japan",
        AUD: "AUD: Australia",
        CAD: "CAD: Canada",
        CHF: "CHF: Switzerland",
        CNY: "CNY: China",
        SEK: "SEK: Sweden",
        NZD: "NZD: New Zealand",
        INR: "INR: India",
        AED: "AED: United Arab Emirates",
        BRL: "BRL: Brazil",
        SGD: "SGD: Singapore",
        HKD: "HKD: Hong Kong",
        MXN: "MXN: Mexico",
        ZAR: "ZAR: South Africa",
        SAR: "SAR: Saudi Arabia",
        KRW: "KRW: South Korea",
        RUB: "RUB: Russia",
        IDR: "IDR: Indonesia",
        TRY: "TRY: Turkey",
        THB: "THB: Thailand",
        PLN: "PLN: Poland",
        ILS: "ILS: Israel",
        NOK: "NOK: Norway",
        DKK: "DKK: Denmark",
        MYR: "MYR: Malaysia",
        HUF: "HUF: Hungary",
        CZK: "CZK: Czech Republic",
        PHP: "PHP: Philippines",
        BGN: "BGN: Bulgaria",
        BRL: "BRL: Brazil",
        CLP: "CLP: Chile",
        CNY: "CNY: China",
        COP: "COP: Colombia",
        HRK: "HRK: Croatia",
        HUF: "HUF: Hungary",
        IDR: "IDR: Indonesia",
        ILS: "ILS: Israel",
        INR: "INR: India",
        ISK: "ISK: Iceland",
        JPY: "JPY: Japan",
        KRW: "KRW: South Korea",
        MXN: "MXN: Mexico",
        MYR: "MYR: Malaysia",
        NOK: "NOK: Norway",
        NZD: "NZD: New Zealand",
        PHP: "PHP: Philippines",
        PLN: "PLN: Poland",
        RON: "RON: Romania",
        RUB: "RUB: Russia",
        SEK: "SEK: Sweden",
        SGD: "SGD: Singapore",
        THB: "THB: Thailand",
        TRY: "TRY: Turkey",
        ZAR: "ZAR: South Africa",
  
      };
  
      return countryNames[currencyCode];
    }
  
    updateExchangeRates();
  
  
    setInterval(updateExchangeRates, 10000);
  });

  // Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get the values from the form inputs
    const username = document.getElementById("username").value.trim();
    const review = document.getElementById("review").value.trim();
  
    // Check if the username and review are not empty
    if (username === "" || review === "") {
      alert("Please enter both your username and review.");
      return;
    }
  
    // Create a review object with the username and review content
    const reviewObject = {
      username,
      review,
      date: new Date().toISOString(), // Add the current date for reference
    };
  
    // Save the review to local storage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(reviewObject);
    localStorage.setItem("reviews", JSON.stringify(reviews));
  
    // Clear the form inputs after submitting the review
    document.getElementById("username").value = "";
    document.getElementById("review").value = "";
  
    alert("Review posted successfully!");
  }
  
  // Add event listener to the form submission
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", handleSubmit);
  
  




