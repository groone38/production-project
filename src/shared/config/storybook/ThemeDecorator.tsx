import { Story } from "@storybook/react";
import { Theme } from "app/provider/theme/ThemeContext";

import "../../../app/styles/index.scss";

export const ThemeDecorator = (theme: Theme) => (Story: Story) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
