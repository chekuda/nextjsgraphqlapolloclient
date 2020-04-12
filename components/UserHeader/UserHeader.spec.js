import React from 'react'
import { shallow } from 'enzyme'

import UserHeader from './UserHeader'

describe('given UserHeader component', () => {
  describe('when trying to render the UserHeader component', () => {
    it('should render the UserHeader component', () => {
      const component = shallow(<UserHeader />)

      expect(component.length).toBe(1)
    })
  })
})
