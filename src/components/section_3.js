// @flow
import React from 'react'
import Gist from 'react-gist'

import useResize from './hooks/useResize'

function Section3() {
  const { height } = useResize()

  return (
    <section id="section-3">
      <div
        className={`container-flud d-flex align-items-center justify-content-center ${height}`}
        style={{ backgroundColor: '#ccc' }}
      >
        <div className="row">
          <div className="col text-center my-5">
            <h2 className="mb-4">
              Flow Type <i className="em em-gem" /> Default Props
            </h2>
            <div className="row">
              <div className="col-sm-4 text-center px-4">
                <h3>Scrollspy Props</h3>
                <div>
                  <Gist id="bf6c3af105b8b0a6c3b830e35d8aae07" file="Scrollspy_props.js" />
                </div>
              </div>
              <div className="col-sm-4 text-center px-4">
                <h3>Scrollspy Default Props</h3>
                <div>
                  <Gist id="bf6c3af105b8b0a6c3b830e35d8aae07" file="Scrollspy_default.js" />
                </div>
              </div>
              <div className="col-sm-4 text-center px-4">
                <h3>ScrollspyNavLink Props</h3>
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
