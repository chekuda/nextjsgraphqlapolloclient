import React from 'react'
import { shallow } from 'enzyme'

import WithSidebar from './WithSidebar'

describe('given WithSidebar component', () => {
  describe('when trying to render the WithSidebar component', () => {
    it('should render the WithSidebar component', () => {
      const component = shallow(<WithSidebar />)

      expect(component.length).toBe(1)
    })
  })
})
