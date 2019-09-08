// @flow
import React, { useState } from 'react'
import type { ChildrenArray } from 'react'
import InView from './inView'

import ScrollspyContext from './scrollspyContext'

type Props = {
  names: Array<string | null>,
  homeIndex?: number,
  topOffset?: string | number,
  bottomOffset?: string | number,
  delayMs?: number,
  children: ChildrenArray<any>,
}

const Scrollspy = ({ names, homeIndex, topOffset, bottomOffset, delayMs, children }: Props) => {
  const [activeName, setActiveName] = useState(names[homeIndex || 0])
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
    <div data-test="component-scrollspy">
      <ScrollspyContext.Provider value={{ updatedName: activeName, updateNavbar: changeActiveNameLazily }}>
        {children.map((component, index) => {
          if (names[index] === null) {
            return React.cloneElement(component, {
              key: index,
            })
          }
          return (
            <InView
              key={index}
              onEnter={() => changeActiveName(names[index])}
              topOffset={topOffset}
              bottomOffset={bottomOffset}
            >
              {component}
            </InView>
          )
        })}
      </ScrollspyContext.Provider>
    </div>
  )
}

Scrollspy.defaultProps = {
  homeIndex: 0,
  topOffset: '50%',
  bottomOffset: '40%',
  delayMs: 50,
}

export default Scrollspy
