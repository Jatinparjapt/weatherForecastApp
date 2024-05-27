import React, {useState} from 'react'

const SearchBar = ({search}) => {
  const [location, setLocation] = useState("");
  const handleSearch = () => {
    search(location);
  };
  return (
    <>
    <div className=" w-[70%] mx-auto h-20 drop-shadow-2xl ">
        <div className="inputDiv mx-7  relative  ">
            <input type="text " value={location}
        onChange={(e) => setLocation(e.target.value)} className='w-full text-white mt-5 px-2 py-2 rounded-3xl bg-black ' placeholder='Enter your city name' />
            <button onClick={handleSearch} className='bg-indigo-600 absolute right-1 top-[24px] bottom-1 rounded-2xl py-1 px-8 ' >Search</button>
        </div>
    </div>
    </>
  )
}

export default SearchBar