import React from 'react'

const Forecast = ({data}) => {
    if(!data){
        return null
    }
  return (
    <>
       <div className="forecast  w-[86%] mx-2 md:mx-auto ">
        <div className='flex justify-center items-center' >

        <h1 className='text-3xl ' >ForeCast For Next 5 Days</h1>
        </div>
        <div className="forecastTable flex justify-center  "> 
        {data.map((day , index)=>(
        <div key={index} className="details border-blue-200  ">
           
            <ul key={index} className='space-x-0  ' >
                <li className='border-blue-300 border-2 rounded-md ' >Date : {day.date}</li>
                <li className='border-blue-300 border-2 rounded-md ' >Temp : {day.temp} <sup>o</sup>  </li>
                <li className=' ' >Weather : {day.description}</li>
                <img className=' w-full '
              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
              alt="weather icon"
            />
            </ul>
        </div> ))}
        </div>
        </div> 
    </>
  )
}

export default Forecast