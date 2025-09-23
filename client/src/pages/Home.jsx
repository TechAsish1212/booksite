import React from 'react'
import Hero from '../components/hERO.JSX'
import Footer from '../components/Footer'
import Categories from '../components/Categories'
import NewArrival from '../components/NewArrival'
import FeaturedBooks from '../components/FeaturedBooks'
import PopularBooks from '../components/PopularBooks'
import NewsLetter from '../components/NewsLetter'
import Achievments from '../components/Achievments'

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrival />
      <FeaturedBooks />
      <PopularBooks />
      <Achievments />
      <NewsLetter />
    </>
  )
}

export default Home