# reactstrap-scrollspy

[![NPM version][npm-image]][npm-url] [![npm module downloads][npm-downloads-image]][npm-downloads-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![License: MIT][license-image]][license-url]

Scrollspy library for [Reactstrap](https://github.com/reactstrap/reactstrap) to create an automatically update navigation easily and flexibly.

## Demo

:fire: [Enjoy :+1:](https://keidrun.github.io/reactstrap-scrollspy/) :fire:

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

You should wrap your components in `Scrollspy`. This has mainly two props, which are `names` and `homeIndex`. `names` is used to identify each component wrapped by this, so you should give unique names' list that arranged in order. Then, `homeIndex` is an index number to identify home component such as `Header`.

#### Flow Type

```javascript
type Props = {
  names: Array<string | null>,
  homeIndex?: number,
  topOffset?: string | number,
  bottomOffset?: string | number,
  delayMs?: number,
  children: ChildrenArray<any>,
}
```

#### Default Props

```javascript
Scrollspy.defaultProps = {
  homeIndex: 0,
  topOffset: '50%',
  bottomOffset: '40%',
  delayMs: 50,
}
```

#### Example

```javascript
// @flow
import React from 'react'

import { Scrollspy } from 'reactstrap-scrollspy'
...

function App() {
  return (
    <>
      <Scrollspy
        names={['navbar', 'header', 'section-1', 'section-2', 'section-3', null]}
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

You should wrap `NavLink` provided by `reactstrap` in `ScrollspyNavLink`. This has an one prop, which is `name`. `name` is used to identify a `NavLink` and notify `Scrollspy` of it automatically.

#### Flow Type

```javascript
type Props = {
  name: string,
  children: Element<any>,
}
```

#### Example

```javascript
// @flow
import React, { useState } from 'react'
import { Collapse, Navbar as ReactstrapNavbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'

import { ScrollspyNavLink } from 'reactstrap-scrollspy'

function Navbar() {
  ...
  return (
    <ReactstrapNavbar expand="md" fixed="top" className="...">
      ...
        <Nav navbar className="...">
          <NavItem>
            <ScrollspyNavLink name="header">
              <NavLink href="#header">Home</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="section-1">
              <NavLink href="#section-1">Section1</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="section-2">
              <NavLink href="#section-2">Section2</NavLink>
            </ScrollspyNavLink>
          </NavItem>
          <NavItem>
            <ScrollspyNavLink name="section-3">
              <NavLink href="#section-3">Section3</NavLink>
            </ScrollspyNavLink>
          </NavItem>
        </Nav>
      ...
    </ReactstrapNavbar>
  )
}

export default Navbar
```

## Peer dependencies

- [React](https://github.com/facebook/react)
- ReactDOM
- [Reactstrap](https://github.com/reactstrap/reactstrap)

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
