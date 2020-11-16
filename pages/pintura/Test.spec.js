import React from 'react'
import { shallow } from 'enzyme'

import Pintura from './Pintura'

describe('given testLayout component', () => {
  describe('when trying to render the testLayout component', () => {
    it('should render the testLayout component', () => {
      const component = shallow(<Pintura />)

      expect(component.length).toBe(1)
    })
  })
})
