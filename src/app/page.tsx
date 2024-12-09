import React from 'react'
import Hero from './components/hero'
import CompanyLogo from './components/companyLogo'
import Categories from './components/Categories'
import HotProduct from './components/hotProducts'
import OurProduct from './components/ourProducts'
import FeaturedProducts from './components/featuredproducts'


const Home = () => {
  return (
    <div>
      <Hero/>
      <CompanyLogo/>
      <FeaturedProducts/>
      <Categories/>
      <HotProduct/>
      <OurProduct/>
      
      
    </div>
  )
}

export default Home