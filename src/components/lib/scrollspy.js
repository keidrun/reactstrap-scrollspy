// @flow
import React, { useState } from 'react'
import type { Node } from 'react'

import InView from './inView'

type Props = {
  navLinkNames: Array<string | null>,
  navIndex?: number,
  homeIndex?: number,
  topOffset?: string | number,
  bottomOffset?: string | number,
  delayMs?: number,
  children: Node,
}

const Scrollspy = ({ navLinkNames, navIndex, homeIndex, topOffset, bottomOffset, delayMs, children }: Props) => {
  const [activeName, setActiveName] = useState(navLinkNames[homeIndex])

  const changeActiveName = name => setActiveName(name)

  const changeActiveNameLazily = name => setTimeout(() => setActiveName(name), delayMs)

  return (
    <>
      {children.map((component, index) => {
        if (navLinkNames[index] === null) {
          return component
        }
        if (index === navIndex) {
          return (
            <InView
              key={navLinkNames[index]}
              onEnter={() => changeActiveName(navLinkNames[index])}
              topOffset={topOffset}
              bottomOffset={bottomOffset}
            >
              {React.cloneElement(component, {
                updateNavLinkName: `${activeName}`,
                updateNavbar: changeActiveNameLazily,
              })}
            </InView>
          )
        }
        return (
          <InView
            key={navLinkNames[index]}
            onEnter={() => changeActiveName(navLinkNames[index])}
            topOffset={topOffset}
            bottomOffset={bottomOffset}
          >
            {component}
          </InView>
        )
      })}
    </>
  )
}

Scrollspy.defaultProps = {
  navIndex: 0,
  homeIndex: 0,
  topOffset: '50%',
  bottomOffset: '40%',
  delayMs: 10,
}

export default Scrollspy
