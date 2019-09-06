// @flow
import React, { useState } from 'react'
import type { Node } from 'react'

import InView from './inView'

type Props = {
  names: Array<string | null>,
  navIndex?: number,
  homeIndex?: number,
  topOffset?: string | number,
  bottomOffset?: string | number,
  delayMs?: number,
  children: Node,
}

const Scrollspy = ({ names, navIndex, homeIndex, topOffset, bottomOffset, delayMs, children }: Props) => {
  const [activeName, setActiveName] = useState(names[homeIndex])
  const [isClicked, setIsClicked] = useState(false)

  const changeActiveName = name => {
    if (!isClicked) {
      setActiveName(name)
    }
  }

  const changeActiveNameLazily = name => {
    setIsClicked(true)
    setTimeout(() => {
      setActiveName(name)
      setIsClicked(false)
    }, delayMs)
  }

  return (
    <>
      {children.map((component, index) => {
        if (names[index] === null) {
          return component
        }
        if (index === navIndex) {
          return (
            <InView
              key={names[index]}
              onEnter={() => changeActiveName(names[index])}
              topOffset={topOffset}
              bottomOffset={bottomOffset}
            >
              {React.cloneElement(component, {
                updatedName: `${activeName}`,
                updateNavbar: changeActiveNameLazily,
              })}
            </InView>
          )
        }
        return (
          <InView
            key={names[index]}
            onEnter={() => changeActiveName(names[index])}
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
  delayMs: 50,
}

export default Scrollspy
