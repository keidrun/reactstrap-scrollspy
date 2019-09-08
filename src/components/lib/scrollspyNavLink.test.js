import React from 'react'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ScrollspyNavLink from './scrollspyNavLink'
import ScrollspyContext from './scrollspyContext'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (value = { updatedName: '', updateNavbar: jest.fn() }, props = {}, children = <div />) =>
  mount(
    <ScrollspyContext.Provider value={value}>
      <ScrollspyNavLink {...props}>{children}</ScrollspyNavLink>
    </ScrollspyContext.Provider>
  )

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

describe('<ScrollspyNavLink />', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const scrollspyComponent = findByTestAttr(wrapper, 'component-scrollspy-nav-link')
    expect(scrollspyComponent.length).toBe(1)
  })
})
