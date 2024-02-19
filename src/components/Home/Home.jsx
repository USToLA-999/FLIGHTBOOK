// eslint-disable-next-line no-unused-vars
import React from 'react'
import video from '../../assets/video.mp4'
import plane from '../../assets/plane.png'
const Home = () => {
  return (
   <div className="home flex container">
    <div className="maintext">
      <h1>Create Ever lasting memories with us</h1>
    </div>
    <div className="homeImages flex">
      <div className="videoDiv">
        <video src={video} autoPlay muted loop className='video'></video>
      </div>
      <img src={plane} alt="" className='plane' />
    </div>
   </div>
  )
}

export default Home
