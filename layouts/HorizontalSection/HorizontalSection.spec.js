import React from 'react'
import { shallow } from 'enzyme'

import { HorizontalSection } from './HorizontalSection'

describe('given HorizontalSection component', () => {
  describe('when trying to render the HorizontalSection component', () => {
    it('should render the HorizontalSection component', () => {
      const component = shallow(<HorizontalSection />)

      expect(component.length).toBe(1)
    })
  })
})
