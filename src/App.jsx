import React from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
import Lounge from './components/Lounge/Lounge'
import Search from './components/Search/Search'
import Subscribe from './components/Subscribe/Subscribe'
import Support from './components/support/Support'
import Travellers from './components/Travelers/Travellers'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      {/* <Support/>
      <Info/>
      <Lounge/>
      <Travellers/>
      <Subscribe/>
      <Footer/>  */}
      
    </div>
  )
}

export default App
