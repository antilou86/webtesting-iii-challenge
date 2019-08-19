// Test away
import React from "react";
import "jest-dom/extend-expect";
import { render } from "@testing-library/react";
import "react-testing-library/cleanup-after-each";


import Dashboard from '../dashboard/Dashboard'

describe('<Dashboard/>', () => {
    it('renders without crashing and burning', () => {
        render(<Dashboard/>)
    })
    it("should match snapshot", () => {
        const { container } = render(<Dashboard />);
        expect(container).toMatchSnapshot();
      });
    
    //honestly most of this was tested already within Controls.specs.js
})