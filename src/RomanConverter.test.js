import {cleanup, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'

class RomanConverter extends React.Component {
    render() {
        return <label>Arabic: <input type="number" /></label>;
    }
}

describe("<RomanConverter />", () => {
    afterEach(cleanup);

    it('has an input field', () => {
        const {getByLabelText} = render(<RomanConverter />);

        expect(() => {
            getByLabelText(/arabic/i);
        }).not.toThrow();
    });

    it('show no roman number by default', () => {
        
    });
})