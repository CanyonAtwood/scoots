// toggle menu
function toggleMenu() {
    document
      .getElementsByClassName("drop-down")[0]
      .classList.toggle("responsive");
  }
  
  console.log('it is returning the API')
  //last modified
  window.onload = function date() {
  
      //Get Year
      document.getElementById("currentyear").textContent = new Date().getFullYear();
  
      //Get last modified date
      document.getElementById("update").innerHTML = document.lastModified;
  
  }
  
  
  // Cozumel Mexico Current weather data pulled from OpenWeather API
  const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=98c59c88abbe5bce05c67468e18ea4e0&units=imperial';
  
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
  
      // Current condition
      document.getElementById("curr-condi").textContent = jsObject.weather[0].main;
  
      // Current temperature
      let temp = Math.round(jsObject.main.temp);
      document.getElementById("curr-temp").textContent = temp;
  
      // Current humidity
      document.getElementById("humidity").textContent = jsObject.main.humidity;
    
    });
  
  
  
    // Cozumel Mexico Weather forecast data pulled from OpenWeather API
    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=98c59c88abbe5bce05c67468e18ea4e0&units=imperial';
  
    fetch(forecastURL)
      .then((response) => response.json())
      .then((jsObject) => {
          console.log(jsObject);
  
      let i = 1;
      let j = 1;
  
      // pull only fifth day records at 12:00:00 noon
      while (i < 40 && j < 6)
      {
        let time = jsObject.list[i].dt_txt;
        if (time.includes('12:00:00')) {
  
          // Date in short format
          let date = new Date(time);
          let weekdayOption = { weekday: 'short' };
          let weekday = date.toLocaleDateString('en-US', weekdayOption);
          let dayId = 'day' + j;
          document.getElementById(dayId).textContent = weekday;
  
          // Weather icon
          let icon = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
          let description = jsObject.list[i].weather[0].description;
          let iconId = 'icon' + j;
          document.getElementById(iconId).setAttribute('src', icon); 
          document.getElementById(iconId).setAttribute('alt', description); 
  
          // Temperature
          let temp = Math.round(jsObject.list[i].main.temp);
          let tempId = 'temp' + j;
          document.getElementById(tempId).textContent = temp + '°F';
  
          j++;
        }
      
        i++;
      }
  
    });
  
  console.log('json works')
  //Accordion Panel -- Terms and Conditions
  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });

    // rental vehicles
  const localURL ="https://canyonatwood.github.io/scoots/scoots/data/scooters.JSON";
  
  fetch(localURL)
  
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
  
      // Current condition
      document.getElementById("met-name").textContent = jsObject.vehicles[0].name;
      document.getElementById("met-max").textContent = jsObject.vehicles[0].max_persons;
      document.getElementById("res-met-half").textContent = jsObject.vehicles[0].res_half;
      document.getElementById("res-met-full").textContent = jsObject.vehicles[0].res_full;
      document.getElementById("in-met-half").textContent = jsObject.vehicles[0].in_half;
      document.getElementById("in-met-full").textContent = jsObject.vehicles[0].in_full;

      document.getElementById("dio-name").textContent = jsObject.vehicles[1].name;
      document.getElementById("dio-max").textContent = jsObject.vehicles[1].max_persons;
      document.getElementById("res-dio-half").textContent = jsObject.vehicles[1].res_half;
      document.getElementById("res-dio-full").textContent = jsObject.vehicles[1].res_full;
      document.getElementById("in-dio-half").textContent = jsObject.vehicles[1].in_half;
      document.getElementById("in-dio-full").textContent = jsObject.vehicles[1].in_full;

      document.getElementById("pcx-name").textContent = jsObject.vehicles[2].name;
      document.getElementById("pcx-max").textContent = jsObject.vehicles[2].max_persons;
      document.getElementById("res-pcx-half").textContent = jsObject.vehicles[2].res_half;
      document.getElementById("res-pcx-full").textContent = jsObject.vehicles[2].res_full;
      document.getElementById("in-pcx-half").textContent = jsObject.vehicles[2].in_half;
      document.getElementById("in-pcx-full").textContent = jsObject.vehicles[2].in_full;

      document.getElementById("atv-name").textContent = jsObject.vehicles[3].name;
      document.getElementById("atv-max").textContent = jsObject.vehicles[3].max_persons;
      document.getElementById("res-atv-half").textContent = jsObject.vehicles[3].res_half;
      document.getElementById("res-atv-full").textContent = jsObject.vehicles[3].res_full;
      document.getElementById("in-atv-half").textContent = jsObject.vehicles[3].in_half;
      document.getElementById("in-atv-full").textContent = jsObject.vehicles[3].in_full;

      document.getElementById("4door-name").textContent = jsObject.vehicles[4].name;
      document.getElementById("4door-max").textContent = jsObject.vehicles[4].max_persons;
      document.getElementById("res-4door-half").textContent = jsObject.vehicles[4].res_half;
      document.getElementById("res-4door-full").textContent = jsObject.vehicles[4].res_full;
      document.getElementById("in-4door-half").textContent = jsObject.vehicles[4].in_half;
      document.getElementById("in-4door-full").textContent = jsObject.vehicles[4].in_full;

      document.getElementById("2door-name").textContent = jsObject.vehicles[5].name;
      document.getElementById("2door-max").textContent = jsObject.vehicles[5].max_persons;
      document.getElementById("res-2door-half").textContent = jsObject.vehicles[5].res_half;
      document.getElementById("res-2door-full").textContent = jsObject.vehicles[5].res_full;
      document.getElementById("in-2door-half").textContent = jsObject.vehicles[5].in_half;
      document.getElementById("in-2door-full").textContent = jsObject.vehicles[5].in_full;
  
      // Current temperature
      let temp = Math.round(jsObject.main.temp);
      document.getElementById("curr-temp").textContent = temp;
  
      // Current humidity
      document.getElementById("humidity").textContent = jsObject.main.humidity;
    
    });
  }