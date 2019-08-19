// Test away!
import React from "react";
import { render } from "@testing-library/react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

describe("<Display />", () => {
    it("renders", () => {
      render(<Display />);
    });
  
    it("should match snapshot", () => {
      const { container } = render(<Display />);
      expect(container).toMatchSnapshot();
    });
  
    it("should display the correct colors and word", () => {
      const { getByText } = render(<Display />);
  
      const open = getByText(/open/i);
      const unlocked = getByText(/unlocked/i);
  
      expect(open).toHaveClass("green-led");
      expect(unlocked).toHaveClass("green-led");
    });
})