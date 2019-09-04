// @flow
import React from 'react'
import type { Node } from 'react'
import { Waypoint } from 'react-waypoint'

type Props = {
  onEnter: Function,
  topOffset?: string | number,
  bottomOffset?: string | number,
  children: Node,
}

const InView = ({ onEnter, topOffset, bottomOffset, children }: Props) => (
  <Waypoint onEnter={onEnter} topOffset={topOffset} bottomOffset={bottomOffset}>
    <div>{children}</div>
  </Waypoint>
)

InView.defaultProps = {
  topOffset: '50%',
  bottomOffset: '40%',
}

export default InView
