// @flow
import React from 'react'

function Header() {
  return (
    <header id="header" className="d-flex align-items-center" style={{ backgroundColor: '#555', height: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col text-center ">
            <h1>
              Let&#39;s try{' '}
              <a
                href="https://github.com/keidrun/reactstrap-scrollspy"
                className="text-warning"
                style={{ textDecoration: 'none', fontStyle: 'italic' }}
              >
                Reactstrap Scrollspy
              </a>{' '}
              !
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
