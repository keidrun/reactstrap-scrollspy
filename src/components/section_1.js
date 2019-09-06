// @flow
import React from 'react'
import Gist from 'react-gist'

function Section1() {
  return (
    <section id="section-1" className="d-flex align-items-center" style={{ backgroundColor: '#ccc', height: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>
              Step 1: Wrap your components in Scrollspy <i className="em em-100" />
            </h2>
            <div>
              <Gist id="bf6c3af105b8b0a6c3b830e35d8aae07" file="Scrollspy_example.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
