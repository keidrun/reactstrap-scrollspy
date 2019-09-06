// @flow
import React from 'react'
import Gist from 'react-gist'

function Section3() {
  return (
    <section id="section-3" className="d-flex align-items-center" style={{ backgroundColor: '#ccc', height: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>
              Flow Types <i className="em em-gem" /> Default Props
            </h2>
            <div className="row">
              <div className="col-4 text-center my-5 px-4">
                <h3>Scrollspy Type</h3>
                <div>
                  <Gist id="bf6c3af105b8b0a6c3b830e35d8aae07" file="Scrollspy_props.js" />
                </div>
              </div>
              <div className="col-4 text-center my-5 px-4">
                <h3>Scrollspy Default Props</h3>
                <div>
                  <Gist id="bf6c3af105b8b0a6c3b830e35d8aae07" file="Scrollspy_default.js" />
                </div>
              </div>
              <div className="col-4 text-center my-5 px-4">
                <h3>ScrollspyNavLink Type</h3>
                <div>
                  <Gist id="bf6c3af105b8b0a6c3b830e35d8aae07" file="ScrollspyNavLink_props.js" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3
