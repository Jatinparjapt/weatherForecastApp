import React from 'react'

const AdditionalDetails = ({getData}) => {
  if(!getData){
    return null
  }
  return (
    <>
     <div className=" w-[60%] mx-auto my-4 flex space-x-2 place-content-around ">
            <span>Pressure :{getData.pressure}atm</span>
            <span>Humidity :{getData.humidity}%</span>
            <span>Speed :{getData.windSpeed}(m/s)</span>
          </div>
    </>
  )
}

export default AdditionalDetails