import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";


const Search = () => {
  return (
    <div className='search container section'>
      <div className="sectionContainer grid">

        <div className="btns flex">

          <div className="singleBtn">
            <span><span>Economy</span></span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="searchInputs flex">
          {/*single inputs*/}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Where want to go ?'/>
            </div>
          </div>
          {/*single inputs*/}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder='Add guests'/>
            </div>
          </div>
          {/*single inputs*/}
          <div className="singleInput flex">
            <div className="iconDiv">
              <IoCalendarOutline className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add date'/>
            </div>
          </div>

          <button className='btn btnBlocks flex'>Search Flight</button>
        </div>

      </div>
    </div>
  )
}

export default Search
