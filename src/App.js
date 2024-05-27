import './App.css';
import CurrentWeatherDisplay from './Components/CurrentWeatherDisplay';
import Forecast from './Components/Forecast';
import AdditionalDetails from './Components/AdditionalDetails';
import SearchBar from './Components/SearchBar';
import axios from 'axios';
import React, {useState} from 'react'
// import image1 from ""
const API_KEY = "06a4405e35752ffb3cc57408f25d66eb";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSearch = async (location) => {
    setLoading(true);
    setError(null);

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      console.log(weatherResponse)
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
      );

      setCurrentWeather({
        temp: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].description,
        icon: weatherResponse.data.weather[0].icon,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
        name:weatherResponse.data.name,
        pressure:weatherResponse.data.main.pressure
      });

      const forecastList = forecastResponse.data.list
        .filter((item, index) => index % 8 === 0)
        .map((item) => ({
          date: item.dt_txt,
          temp: item.main.temp,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

      setForecast(forecastList);
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  console.log(currentWeather , "curt")
  return (
    <>
    <div className={"bg-[url('./Images/bg1.jpg')] h-[100vh] w-[100vw] bg-cover "} >
     <div className=" pt-5 flex justify-center items-center heading">
     <h1 className='text-4xl text-blue-900' >Weather Wise App</h1>
      </div>
      <SearchBar search={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <CurrentWeatherDisplay data={currentWeather} />
          <AdditionalDetails getData={currentWeather} />
          <Forecast data={forecast} />
        </>
      )}
   
    </div>
    </>
  );
}

export default App;
