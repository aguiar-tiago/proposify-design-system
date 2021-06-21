import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import { Text } from '../components/typography';
import TestsProvider from '../../.storybook/providers/tests-provider';


afterEach(cleanup);

describe( 'Text', ( ) => {

  test( 'It should render the correct text', ( ) => {

    const content = 'text example';
    const { getByText } = render(
      <TestsProvider>
        <Text>{content}</Text>
      </TestsProvider>
    );

    expect( getByText( content ) ).toBeVisible( );

  } );

} );