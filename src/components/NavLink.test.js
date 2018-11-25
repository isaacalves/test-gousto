import React from 'react';
import NavLink from './NavLink';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<NavLink slug="christmas">Christmas</NavLink>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
