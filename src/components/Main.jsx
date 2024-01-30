import React from 'react'
import Navbar from '../Landing-page/navbar/Navbar'
import SecondPage from '../Landing-page/SecondPage'
import Thirdpage from '../Landing-page/Thirdpage'
import FourthPage from '../Landing-page/FourthPage'
import Lastpage from '../Landing-page/Lastpage'
import FifthPage from '../Landing-page/FifthPage'
import Footer from '../Landing-page/Footer'

function Main() {
  return (
    <div>
    <Navbar/>
    <SecondPage/>
    <Thirdpage/>
    <FourthPage/>
    <FifthPage/>
    <Lastpage/>
    <Footer/>
    </div>
  )
}

export default Main