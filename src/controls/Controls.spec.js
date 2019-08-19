// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Controls from './Controls'
import Dashboard from '../dashboard/Dashboard'

describe('<Controls/>', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("should open the gate on click", () => {
        const { getByText } = render(<Dashboard />);
        const open = getByText(/Close Gate/i);
        fireEvent.click(open);
      });
    it("should close gate", () => {
        const { getByText } = render(<Dashboard />);
        const lock = getByText(/Lock Gate/i);
        fireEvent.click(lock);
      });
    it("should lock the gate", () => {
        const { getByText } = render(<Dashboard />);
        const close = getByText(/Close Gate/i);
        const lock = getByText(/Lock Gate/i);
    
        fireEvent.click(close);
        getByText(/Open Gate/i);
    
        fireEvent.click(lock);
        getByText(/Unlock Gate/i);
      });
});

