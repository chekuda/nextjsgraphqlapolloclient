import React from 'react'
import { shallow } from 'enzyme'

import Test from './Test'

describe('given testLayout component', () => {
  describe('when trying to render the testLayout component', () => {
    it('should render the testLayout component', () => {
      const component = shallow(<Test />)

      expect(component.length).toBe(1)
    })
  })
})
