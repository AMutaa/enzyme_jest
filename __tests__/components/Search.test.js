import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Search from '../../src/components/Search';

describe('Search component', () => {
  test('renders', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.exists()).toBe(true)
  })
})
test()

