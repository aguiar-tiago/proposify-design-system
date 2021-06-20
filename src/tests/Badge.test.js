import React from 'react';
import { render, cleanup, } from '@testing-library/react';
import Badge from '../components/base/Badge';
import 'jest-dom/extend-expect';
import TestsProvider from '../../.storybook/providers/tests-provider';

afterEach( cleanup );


describe( 'Badge', ()=> {
    test( 'Content should be visible', ( ) => {
        const children = 'Badge';
        const size = 'md';

        const { getByText } = render(
            <TestsProvider>
                <Badge size={size} active>
                    {children}
                </Badge>
            </TestsProvider>
        );

        expect( getByText( children ) ).toBeInTheDocument( );

    } );

} );