import type { Meta, StoryObj } from "@storybook/react";
// import "app/styles/themes/dark.scss";
// import "app/styles/themes/normal.scss";
// import "./Button.module.scss";
// import "../../../../config/storybook/storybook.scss";
import Button, { ThemeButton } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Test",
  },
};

export const Clear: Story = {
  args: {
    children: "Test",
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Test",
    theme: ThemeButton.OUTLINE,
  },
};
