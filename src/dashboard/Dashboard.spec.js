// Test away
import React from "react";
import "jest-dom/extend-expect";
import { render } from "@testing-library/react";
import "react-testing-library/cleanup-after-each";


import Dashboard from '../dashboard/Dashboard'

describe('<Dashboard/>', () => {
    it('renders without crashing and burning', () => {
        render(<Dashboard />)
    })
    it("should match snapshot", () => {
        const { container } = render(<Dashboard />);
        expect(container).toMatchSnapshot();
    });
    it("should display the correct colors and word on click", () => {
        const { getByText } = render(<Dashboard />);

        //done in a single test because the button clicks have to be fired in a specific order.

        //initial state
        const open = getByText(/open/i);
        const unlocked = getByText(/unlocked/i);
        expect(open).toHaveClass("green-led");
        expect(unlocked).toHaveClass("green-led");

        //making sure it closes
        const closeButton = getByText(/close gate/i);
        const closed = getByText(/closed/i);
        fireEvent.click(closeButton);
        expect(closed).toHaveClass("red-led");

        //making sure it locks
        const lockGate = getByText(/lock gate/i);
        const locked = getByText(/locked/i);
        fireEvent.click(lockGate);
        expect(locked).toHaveClass("red-led");

        //making sure it unlocks
        const unlockGate = getByText(/unlock gate/i);
        fireEvent.click(unlockGate);
        expect(unlocked).toHaveClass("green-led");

        //making sure it returns to open
        const openGate = getByText(/open gate/i);
        fireEvent.click(openGate);
        expect(open).toHaveClass("green-led");
    })
})