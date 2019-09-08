import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import InView from './inView'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props = {}) => shallow(<InView {...props} />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

describe('<InView />', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const inViewComponent = findByTestAttr(wrapper, 'component-in-view')
    expect(inViewComponent.length).toBe(1)
  })
})
