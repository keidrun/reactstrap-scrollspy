// @flow
import React, { useContext } from 'react'
import type { Element } from 'react'
import { NavLink } from 'reactstrap'

import ScrollspyContext from './scrollspyContext'

type Props = {
  name: string,
  children: Element<any>,
}

function ScrollspyNavLink({ name, children }: Props) {
  const { updatedName, updateNavbar } = useContext(ScrollspyContext)

  return (
    <div data-test="component-scrollspy-nav-link">
      {children.type === NavLink
        ? React.cloneElement(children, {
            active: name === updatedName,
            onClick: () => updateNavbar(name),
          })
        : children}
    </div>
  )
}

export default ScrollspyNavLink
