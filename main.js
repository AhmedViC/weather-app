const countryName = document.getElementById('city-name');
const weather = document.getElementById('weather');
const feelslike = document.getElementById('feels-like');
const windspeed = document.getElementById('windspeed');
const hum = document.getElementById('hum');
const country = document.getElementById('country-name');
const btn = document.getElementById('search');



getWeather('khobar');
async function getWeather(countryToSearch)
{
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryToSearch}&APPID=f3908ca4c3440f6bd26b43aa6aa9c716`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    let country = countryToSearch;
    let temp = data.main.temp;
    let feels = data.main.feels_like;
    let windspeednew = data.wind.speed;
    console.log(data.main.humidity);
    let h =data.main.humidity;
   console.log(temp,feels,windspeed,h);

   updateFileds(country,temp,feels,windspeednew,h);

    }catch(e)
    {
        console.log("hi");
        alert('error');
        return
    }




}

function updateFileds(country,temp,feels,newwindspeed,h)
{
    console.log(countryName==null);
    let icons = [`<i class="fa-solid fa-sun"></i>`,`<i class="fa-solid fa-sun-bright"></i>`];
    let src;
    if((temp-272.15).toFixed(2)>30)
    {
        src=icons[0];

    }
    else{
        src=icons[1];
    }
    console.log(src);
    countryName.innerHTML = `${src} `+country.charAt(0).toUpperCase()+country.substring(1);
    weather.innerHTML = `temp: ${(temp-272.15).toFixed(2)} °C`;
    feelslike.innerHTML = `feels like: ${(feels-272.15).toFixed(2)} °C`;
    windspeed.innerHTML= `wind speed: ${newwindspeed} km/h`;
    hum.innerHTML=`humidity: ${h}`;



}


btn.addEventListener('click' , () =>{
   getWeather(country.value);
});
