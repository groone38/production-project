import type { Meta, StoryObj } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/provider/theme";
import PageError from "./PageError";
import "./PageError.module.scss";

const meta = {
  title: "widgets/PageError",
  component: PageError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
