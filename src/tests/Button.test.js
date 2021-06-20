import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Button from '../components/base/Button';
import TestsProvider from '../../.storybook/providers/tests-provider';

afterEach(cleanup);

describe( 'Button', ( ) => {

    describe( 'Content', ( ) => {

        test( 'Click', ( ) => {
            const children = 'Proposify Button';
            const onClick = jest.fn();

            const { getByText } = render(
                <TestsProvider>
                    <Button onClick={onClick}>{children}</Button>
                </TestsProvider>
            );

            fireEvent.click( getByText(children) );
            expect( onClick ).toHaveBeenCalled( );
        } );
    });
} );