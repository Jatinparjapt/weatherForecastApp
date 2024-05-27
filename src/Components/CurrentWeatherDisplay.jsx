import React from 'react'

const CurrentWeatherDisplay = ({data}) => {
  if(!data){
    return (
      <div className="flex justify-center items-center">
        <p className='text-orange-700' >
          Please Enter Some Details To Explore The App
        </p>
      </div>
    )
  }
  return (
    <>
        <div className=" mt-8 mx-auto w-[60%]  flex justify-center items-center ">
      <div className="details w-full mx-auto  ">
        <div className="day rounded-lg flex w-full place-content-around   ">
          <div className='dayDiv'>
            City : {data.name}
          </div>
          <div className="date">
           Weather {data.description}
          </div>
        </div>
        
        <div className="weather">
          <div className="temp flex place-content-around ">
            <div className="temperture text-3xl md:text-7xl ">
              {data.temp} <sup>o</sup>
            </div>
            <div className="icon w-auto ">
            <img 
              src={`http://openweathermap.org/img/wn/${data.icon}.png`}
              alt="weather icon"
            />
            </div>
          </div>
        </div>
      </div>
            
        </div>
    </>
  )
}

export default CurrentWeatherDisplay