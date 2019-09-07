// @flow
import React from 'react'

function Header() {
  return (
    <header id="header">
      <div
        className="container-flud d-flex align-items-center justify-content-center vh-100"
        style={{ backgroundColor: '#555' }}
      >
        <div className="row">
          <div className="col text-center text-black">
            <h1>
              Let&#39;s enjoy{' '}
              <span>
                <i className="em em-fire" />{' '}
                <a
                  href="https://github.com/keidrun/reactstrap-scrollspy"
                  className="text-warning"
                  style={{ textDecoration: 'none', fontStyle: 'italic' }}
                >
                  Reactstrap Scrollspy
                </a>{' '}
                <i className="em em-fire" />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
