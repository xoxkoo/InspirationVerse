import * as React from 'react';
import renderer from 'react-test-renderer';

import { BasicText } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<BasicText>Snapshot test!</BasicText>).toJSON();

  expect(tree).toMatchSnapshot();
});
