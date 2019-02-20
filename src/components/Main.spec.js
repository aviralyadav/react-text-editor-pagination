import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './Main';

configure({adapter: new Adapter()});

describe('<Main />', ()=>{
  it('renders without crashing', () => {
    const component = shallow(<Main />);
    console.log(component)
    expect(component).toHaveLength(1);
  });
});
