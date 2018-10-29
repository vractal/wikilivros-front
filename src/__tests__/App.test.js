import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

jest.mock('croods', () => ({
  createReducer: () => (state = {}, action = {}) => state,
  Provider: ({ children, ...props }) => (
    <div {...props}>Provider - {children}</div>
  ),
  Info: ({ children, ...props }) => <div {...props}>Info - {children}</div>,
}))

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
