import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoWall from './PhotoWall';
import { BrowserRouter } from "react-router-dom";
import { mountWrap, shallowWrap } from './contextWrap';

configure({adapter: new Adapter()});



const posts = [{
    id: 0,
    description: "beautiful landscape",
    imageLink:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
  },{
    id: 1,
    description: "beautiful landscape",
    imageLink:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
      "3919321_1443393332_n.jpg"
  }];

  const wrappedShallow = () => shallowWrap(<PhotoWall posts={posts} />);

  const wrappedMount = () => mountWrap(<PhotoWall comments={['sdsdf','sdfsdf']} posts={posts} />);

describe('<PhotoWall />', ()=>{
  it('renders without crashing', () => {
    //const component = mount(<PhotoWall comments={['sdsdf','sdfsdf']} posts={posts} />);
    const component = wrappedMount();
    console.log(component.props().comments)
    // console.log(component.instance().props.posts)

    expect(component).toHaveLength(1);
  });
});
