import React from 'react'
import { shallow } from 'enzyme'

import Gallery from './Gallery'

describe('given Gallery component', () => {
  describe('when trying to render the Gallery component', () => {
    it('should render the Gallery component', () => {
      const component = shallow(<Gallery />)

      expect(component.length).toBe(1)
    })
  })
})
