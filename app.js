const body = document.querySelector('body')
const allText = document.querySelector('.text-output')

const api = {
    key: "5670cb22608853cc7531a1aa12630f5e",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.city-input');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.city-name-output');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let temp = document.querySelector('.weather-output');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
  
    let weather_text = document.querySelector('.weather-text');
    weather_text.innerText = weather.weather[0].main;

    let time_in_day = document.querySelector('.time-in-day')

    var icon_code = weather.weather[0].icon;

    if(icon_code == "04d") {
        body.style.backgroundImage = "url('Images/04d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Broken Clouds"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }
    
    if (icon_code == "04n") {
        body.style.backgroundImage = "url('Images/04n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Broken Clouds"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "01d") {
        body.style.backgroundImage = "url('Images/01d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Mostly Clear"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "01n") {
        body.style.backgroundImage = "url('Images/01n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Mostly Clear"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "02d") {
        body.style.backgroundImage = "url('Images/02d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Few Clouds"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "02n") {
        body.style.backgroundImage = "url('Images/02n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Few Clouds"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "03d") {
        body.style.backgroundImage = "url('Images/03d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Scattered Clouds"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "03n") {
        body.style.backgroundImage = "url('Images/03n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Scattered Clouds"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "09d") {
        body.style.backgroundImage = "url('Images/09d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Light Rain"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "09n") {
        body.style.backgroundImage = "url('Images/09n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Light Rain"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "10d") {
        body.style.backgroundImage = "url('Images/10d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Heavy Rain"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "10n") {
        body.style.backgroundImage = "url('Images/10n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Heavy Rain"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "11d") {
        body.style.backgroundImage = "url('Images/11d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Thunderstorm"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "11n") {
        body.style.backgroundImage = "url('Images/11n.jpeg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Thunderstorm"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "13d") {
        body.style.backgroundImage = "url('Images/13d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Snowing"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "13n") {
        body.style.backgroundImage = "url('Images/13n.jpeg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Snowing"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }

    if(icon_code == "50d") {
        body.style.backgroundImage = "url('Images/50d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Mist"
        time_in_day.innerHTML = "Day"
        allText.style.color = "black"
    }

    if(icon_code == "50n") {
        body.style.backgroundImage = "url('Images/50n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        weather_text.innerHTML = "Mist"
        time_in_day.innerHTML = "Night"
        allText.style.color = "white"
    }
  
//     let hilow = document.querySelector('.hi-low');
//     hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
  }
