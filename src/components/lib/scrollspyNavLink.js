// @flow
import React from 'react'
import type { Children } from 'react'

type Props = {
  navLinkName: string,
  updateNavLinkName: string,
  updateNavbar: Function,
  children: Children,
}

const ScrollspyNavLink = ({ navLinkName, updateNavLinkName, updateNavbar, children }: Props) => (
  <>
    {React.cloneElement(children, {
      active: navLinkName === updateNavLinkName,
      onClick: () => updateNavbar(navLinkName),
    })}
  </>
)

export default ScrollspyNavLink
