import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    className: "m-4",
    children: "Button",
    btnType: "primary",
  },
};

export const DisabledPrimary: Story = {
  args: {
    className: "m-4",
    children: "Button",
    btnType: "primary",
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    className: "m-4",
    children: "Button",
    btnType: "secondary",
    disabled: true,
  },
};
