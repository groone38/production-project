import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/provider/theme";
import AppLink, { AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  args: {
    to: "/",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Test",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Test",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Test",
    theme: AppLinkTheme.PRIMARY,
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const SecondaryDark: Story = {
  args: {
    children: "Test",
    theme: AppLinkTheme.SECONDARY,
  },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
