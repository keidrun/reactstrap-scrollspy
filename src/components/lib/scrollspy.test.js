import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Scrollspy from './scrollspy'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => document.createElement('div')

const findByTestAttr = (wrapper, val) => {
  ReactDOM.render(
    <Scrollspy names={['nabvar']}>
      <div />;
    </Scrollspy>,
    wrapper
  )
  const targetElm = wrapper.querySelector(`div[data-test="${val}"`)
  return shallow(React.createElement('div', null, targetElm))
}

describe('<Scrollspy />', () => {
  it('renders without error', () => {
    const wrapper = setup()
    const scrollspyComponent = findByTestAttr(wrapper, 'component-scrollspy')
    expect(scrollspyComponent.length).toBe(1)
  })
})
