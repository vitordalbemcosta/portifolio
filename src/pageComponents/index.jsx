import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Projects from './Projects'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Projects />
      </Layout>
      <Footer />
    </>
  )
}

export default Index
