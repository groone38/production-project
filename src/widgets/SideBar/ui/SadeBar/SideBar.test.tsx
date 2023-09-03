import { fireEvent, render, screen } from "@testing-library/react";
import SideBar from "./SideBar";
import { withTranslation } from "react-i18next";

describe("classNames", () => {
  it("Render", () => {
    const SideBarWithTranslation = withTranslation()(SideBar);
    render(<SideBarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("Toggle", () => {
    const SideBarWithTranslation = withTranslation()(SideBar);
    render(<SideBarWithTranslation />);
    const toogleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toogleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("open");
  });
});
