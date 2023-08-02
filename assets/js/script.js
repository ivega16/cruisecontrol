// set map option //

var mylatlng = { lat: 25.778135, lng:  -80.179100};
var mapOptions = {
  center: mylatlng,
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
// create map //

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

// create directions service object to use the route method and get a result for the request//
var directionsService = new google.maps.DirectionsService();
// create a direction RENDER object which will display the route //
var directionsDisplay = new google.maps.DirectionsRenderer();
// bind  the directionsRENDER to the map//
directionsDisplay.setMap(map);

function calcRoute(){
  var request = {
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.TravelMode.DRIVING,  // can add or change for walking, bike and transit
    unitSystem: google.maps.UnitSystem.IMPERIAL

  }

// pass request to route method, get distance and time //
directionsService.route(request, (result, status) => {
  if(status == google.maps.DirectionsStatus.OK) {
    
    const output = document.querySelector("#output");
    output.innerHTML = "<div class='alert-info'> from " + document.getElementById("from").value + ". <br />To: " + document.getElementById("to").value + ". <br /> Driving distance <i class='fa-regular fa-map'></i> :" + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fa-solid fa-hourglass-half'></i> :" + result.routes[0].legs[0].duration.text + ".</div>";
    // display route and delete//
    directionsDisplay.setDirections(result);
  } else {
    directionsDisplay.setDirections({ routes: []});
   
    map.setCenter(mylatlng); // center map in miami port //

   // output.innerHTML = "<div class='alert-danger><i class='fa-thin fa-circle-exclamation'></i> Driving distance not possible. </div>";                         // error message if driving not possible //
  }
});
}
// auto complete function for input //
//var options = {
 // types: ['(cities']
//}

//var input1 = document.getElementById("from");
//var autocomplete1 = new google.maps.places.Autocomplete(input1, options)

//var input2 = document.getElementById("to");
//var autocomplete2 = new google.maps.places.Autocomplete(input2, options)
// Weather Api //
let weather = {
    apiKey: "7e68cdfa71c2c8c17187eb95320793b0",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " MPH";
      document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
    
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });

  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Miami");

 //            //                  //                     //                 // 
var dropBtnEl = document.querySelector(".dropbtn")
var dropMenuOne = document.getElementById("myDropdown")

function dropMenuOptions() {
    dropMenuOne.classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


 // dropBtnEl.addEventListener("click", dropMenuOptions)
