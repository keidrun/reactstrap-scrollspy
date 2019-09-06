// @flow
import React from 'react'
import type { Node } from 'react'

type Props = {
  name: string,
  updatedName: string,
  updateNavbar: Function,
  children: Node,
}

const ScrollspyNavLink = ({ name, updatedName, updateNavbar, children }: Props) => (
  <>
    {React.cloneElement(children, {
      active: name === updatedName,
      onClick: () => updateNavbar(name),
    })}
  </>
)

export default ScrollspyNavLink
