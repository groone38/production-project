import { BrowserRouter } from "react-router-dom";
import { Decorator, Story } from "@storybook/react";

export const RouterDecorator: Decorator = (Story) => (
  <BrowserRouter>{Story()}</BrowserRouter>
);
// export const StyleDecorator: Decorator = (Story) => Story();
