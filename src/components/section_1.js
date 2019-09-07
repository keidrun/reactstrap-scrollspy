// @flow
import React from 'react'
import Gist from 'react-gist'

import useResize from './hooks/useResize'

function Section1() {
  const { height, width } = useResize()

  return (
    <section id="section-1">
      <div
        className={`container-flud d-flex align-items-center  justify-content-center ${height}`}
        style={{ backgroundColor: '#ccc' }}
      >
        <div className={`row ${width}`}>
          <div className="col-sm-12 text-center my-5">
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
