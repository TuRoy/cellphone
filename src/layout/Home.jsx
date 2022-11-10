import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HomeContent from '../components/homeContent/HomeContent'



function Home() {

  return (
    <div>
      <Header></Header>
     <div className="components__homecontent"> <HomeContent></HomeContent></div>
     <div className="components_footer"> <Footer></Footer></div>
    </div>
  )
}

export default Home