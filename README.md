# reactstrap-scrollspy

[![NPM version][npm-image]][npm-url] [![npm module downloads][npm-downloads-image]][npm-downloads-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![License: MIT][license-image]][license-url]

Scrollspy library for Reactstrap to create an automatically update navigation easily and flexibly.

## Install

```bash
npm i reactstrap-scrollspy
```

Or

```bash
yarn add reactstrap-scrollspy
```

## Usage

This library provides `Scrollspy` and `ScrollspyNavLink` components.

### Scrollspy

You should wrap your components in `Scrollspy`. This has mainly 3 props, which are `navLinkNames`, `navIndex` and `homeIndex`. `navLinkNames` is used to identify each component wrapped by this, so you should give appropriate names' list that arranged in order. Then, `navIndex` is an index number to identify `Navbar` and `homeIndex` is also an index number to identify home component such as `Header`.

#### Props

```javascript
type Props = {
  navLinkNames: Array<string | null>,
  navIndex?: number,
  homeIndex?: number,
  topOffset?: string | number,
  bottomOffset?: string | number,
  delayMs?: number,
  children: Node,
}
```

#### Default

```javascript
Scrollspy.defaultProps = {
  navIndex: 0,
  homeIndex: 0,
  topOffset: '50%',
  bottomOffset: '40%',
  delayMs: 10,
}
```

#### Example

```javascript
// @flow
import React from 'react'

import { Scrollspy } from 'reactstrap-scrollspy'

import Navbar from './navbar'
import Header from './header'
import Section1 from './section_1'
import Section2 from './section_2'
import Section3 from './section_3'
import Footer from './footer'

function App() {
  return (
    <>
      <Scrollspy
        navLinkNames={['nav', 'header', 'section-1', 'section-2', 'section-3', null]}
        navIndex={0}
        homeIndex={1}
      >
        <Navbar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </Scrollspy>
    </>
  )
}

export default App
```

### ScrollspyNavLink

You should wrap `NavLink` provided by `reactstrap` in `ScrollspyNavLink`. This has 3 props, which are `navLinkName`, `updateNavLinkName` and `updateNavbar`. `navLinkName` is used to identify a `NavLink`. `updateNavLinkName` and `updateNavbar` are used to update a navigation then they are passed from a parent component which is `Scrollspy` automatically so you should pass them to this.

#### Props

```javascript
type Props = {
  navLinkName: string,
  updateNavLinkName: string,
  updateNavbar: Function,
  children: Children,
}
```

#### Example

```javascript
// @flow
import React, { useState } from 'react'
import { Collapse, Navbar as ReactstrapNavbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

import { ScrollspyNavLink } from 'reactstrap-scrollspy'

type Props = {
  updateNavLinkName?: string,
  updateNavbar?: Function,
}

function Navbar({ updateNavLinkName, updateNavbar }: Props) {
...

  return (
    <ReactstrapNavbar expand="md" fixed="top" className="...">
      ...
        <Nav navbar className="..."}>
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
      ...
    </ReactstrapNavbar>
  )
}

Navbar.defaultProps = {
  updateNavLinkName: undefined,
  updateNavbar: undefined,
}

export default Navbar
```

[npm-url]: https://npmjs.org/package/reactstrap-scrollspy
[npm-image]: https://badge.fury.io/js/reactstrap-scrollspy.svg
[npm-downloads-url]: https://npmjs.org/package/reactstrap-scrollspy
[npm-downloads-image]: https://img.shields.io/npm/dt/reactstrap-scrollspy.svg
[travis-url]: https://travis-ci.org/keidrun/reactstrap-scrollspy
[travis-image]: https://secure.travis-ci.org/keidrun/reactstrap-scrollspy.svg?branch=master
[depstat-url]: https://david-dm.org/keidrun/reactstrap-scrollspy
[depstat-image]: https://david-dm.org/keidrun/reactstrap-scrollspy.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
