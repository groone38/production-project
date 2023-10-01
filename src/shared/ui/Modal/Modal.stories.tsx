import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
// import "app/styles/themes/dark.scss";
// import "app/styles/themes/normal.scss";
// import "./Button.module.scss";
// import "../../../../config/storybook/storybook.scss";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor",
  },
};
