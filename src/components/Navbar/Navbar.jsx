// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {SiConsul } from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../assets/logo.png'
const Navbar = () => {

//remove navbar in small screen

const [active, setActive] = useState('navbarMenu')
const showNavBar = ()=>{
  setActive('navbarMenu showNavBar')
}
const removeNavBar = ()=>{
  setActive('navbarMenu ')
}


  return (
    <div className='navBar flex'>

     <div className="navBarOne flex">

        <div className="">
        <SiConsul className='icon'/>
        </div>
        <div className="none flex">
            <li className="flex"> <BsPhoneVibrate className='icon'/> Support</li>
            <li className="flex"> <AiOutlineGlobal  className='icon'/> Languages</li>
        </div>

        <div className="atb flex">
            <span>Sign In</span>
            <span>Sign Out</span>
        </div>
     </div>

     <div className="navBarTwo flex">
        <div className="logoDiv">
            <img src={logo} alt="logo" className='Logo' />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">Home</li>
            <li onClick={removeNavBar} className="listItem">About</li>
            <li onClick={removeNavBar} className="listItem">Offer</li>
            <li onClick={removeNavBar} className="listItem">Seats</li>
            <li onClick={removeNavBar} className="listItem">Destinations</li>
          </ul>

          <button onClick={removeNavBar} className='btn  flex btnOne'>
            Contact
          </button>

          <button className='btn  flex btnTwo'>
            Contact
          </button>

        </div>
        <div onClick={showNavBar } className="toggleIcon">
            <CgMenuGridO className='icon'/>
        </div>
        
     </div>
    </div>
  )
}

export default Navbar
