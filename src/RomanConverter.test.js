import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'

class RomanConverter extends React.Component {

    state = {
        roman: null,
    }

    handleChange = (event) => {
        this.setState({roman: "I"});
    }

    render() {
        return (
            <>
            <label>Arabic: <input onChange = {this.handleChange} type="number" /></label>;
            <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
            </>
        )
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
        const {getByText} = render(<RomanConverter />);

        expect(() => {
            getByText("Roman: none");
        }).not.toThrow();
    });

    it('converts 1 to I', () => {
        const {getByText, getByLabelText} = render(<RomanConverter />);
        fireEvent.change(getByLabelText(/arabic/i), {target: {value: "1"}});

        expect(() => {
            getByText("Roman: I");
        }).not.toThrow();
    });
})