import { classNames } from "shared/lib/classNames/classNames";
import { render, screen } from "@testing-library/react";
import Button, { ThemeButton } from "./Button";

describe("classNames", () => {
  it("test render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("check theme button", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
    screen.debug();
  });
});
