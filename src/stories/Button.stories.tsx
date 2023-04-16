import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};
