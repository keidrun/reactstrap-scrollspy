// @flow
import React, { useState } from 'react'
import { Collapse, Navbar as ReactstrapNavbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

import { ScrollspyNavLink } from './lib'

type Props = {
  updatedName?: string,
  updateNavbar?: Function,
}

function Navbar({ updatedName, updateNavbar }: Props) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <ReactstrapNavbar expand="md" fixed="top" className="navbar-dark bg-dark">
      <a href="/reactstrap-scrollspy/" className="text-warning" style={{ textDecoration: 'none' }}>
        <h3>Reactstrap Scrollspy Demo</h3>
      </a>

      <NavbarToggler onClick={toggleNavbar}>
        <span className="navbar-toggler-icon" />
      </NavbarToggler>

      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar className="ml-auto" style={{ fontSize: '1.4rem' }}>
          <NavItem>
            <ScrollspyNavLink name="header" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#header">Home</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="section-1" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#section-1">Section1</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="section-2" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#section-2">Section2</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="section-3" updatedName={updatedName} updateNavbar={updateNavbar}>
              <NavLink href="#section-3">Section3</NavLink>
            </ScrollspyNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  )
}

Navbar.defaultProps = {
  updatedName: undefined,
  updateNavbar: undefined,
}

export default Navbar
