import React from 'react'
import { shallow } from 'enzyme'

import SimpleCard from './SimpleCard'

describe('given SimpleCard component', () => {
  describe('when trying to render the SimpleCard component', () => {
    it('should render the SimpleCard component', () => {
      const component = shallow(<SimpleCard />)

      expect(component.length).toBe(1)
    })
  })
})
