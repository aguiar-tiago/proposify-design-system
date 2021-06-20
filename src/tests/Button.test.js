import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Button from '../components/base/Button';
import TestsProvider from '../../.storybook/providers/tests-provider';

afterEach(cleanup);

describe( 'Button', ( ) => {

    describe( 'Content', ( ) => {

        test( 'Click should fire event', ( ) => {
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

        test( 'Content should be visible', ( ) => {
            const children = 'Proposify Button';
            const size = 'md';
            const variant = 'primary';

            const { getByText } = render(
                <TestsProvider>
                    <Button variant={variant} size={size}>
                        {children}
                    </Button>
                </TestsProvider>
            );

            expect( getByText( children ) ).toBeInTheDocument( );
        } )
    });
} );