// @flow
import React from 'react'
import Gist from 'react-gist'

function Section2() {
  return (
    <section
      id="section-2"
      className="d-flex align-items-center"
      style={{ backgroundColor: '#555', paddingTop: 50, paddingBottom: 50 }}
    >
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2>
              Step 2: Wrap NavLink in ScrollspyNavLink <i className="em em---1" />
            </h2>
            <div>
              <Gist id="bf6c3af105b8b0a6c3b830e35d8aae07" file="ScrollspyNavLink_example.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
