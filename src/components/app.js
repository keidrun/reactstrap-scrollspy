// @flow
import React from 'react'

import { Scrollspy } from './lib'

import Navbar from './navbar'
import Header from './header'
import Section1 from './section_1'
import Section2 from './section_2'
import Section3 from './section_3'
import Footer from './footer'

function App() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Scrollspy names={['navbar', 'header', 'section-1', 'section-2', 'section-3', null]} homeIndex={1}>
        <Navbar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </Scrollspy>
    </div>
  )
}

export default App
