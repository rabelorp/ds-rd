import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "danger"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: "Botão primário", variant: "primary" } };
export const Secondary: Story = { args: { children: "Botão secundário", variant: "secondary" } };
export const Ghost: Story = { args: { children: "Botão ghost", variant: "ghost" } };
export const Danger: Story = { args: { children: "Botão danger", variant: "danger" } };
export const Loading: Story = { args: { children: "Salvando...", loading: true } };
export const Disabled: Story = { args: { children: "Desabilitado", disabled: true } };
export const SmallSize: Story = { args: { children: "Pequeno", size: "sm" } };
export const LargeSize: Story = { args: { children: "Grande", size: "lg" } };
export const DarkMode: Story = {
  args: { children: "Dark mode", variant: "primary" },
  parameters: { backgrounds: { default: "dark" } },
};
