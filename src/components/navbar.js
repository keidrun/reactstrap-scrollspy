// @flow
import React, { useState } from 'react'
import { Collapse, Navbar as ReactstrapNavbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

import { ScrollspyNavLink } from './lib'

type Props = {
  updateNavLinkName?: string,
  updateNavbar?: Function,
}

function Navbar({ updateNavLinkName, updateNavbar }: Props) {
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
            <ScrollspyNavLink navLinkName="header" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#header">Home</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="section-1" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#section-1">Section1</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="section-2" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#section-2">Section2</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink navLinkName="section-3" updateNavLinkName={updateNavLinkName} updateNavbar={updateNavbar}>
              <NavLink href="#section-3">Section3</NavLink>
            </ScrollspyNavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </ReactstrapNavbar>
  )
}

Navbar.defaultProps = {
  updateNavLinkName: undefined,
  updateNavbar: undefined,
}

export default Navbar
