// @flow
import React from 'react'
import Gist from 'react-gist'

import useResize from './hooks/useResize'

function Section2() {
  const { width } = useResize()

  return (
    <section id="section-2">
      <div
        className="container-flud d-flex align-items-center justify-content-center"
        style={{ backgroundColor: '#555', marginTop: '-2rem', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <div className={`row ${width}`}>
          <div className="col-sm-12 text-center">
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
