import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import React from "react";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "primary", "success", "warning", "error", "info"] },
    size: { control: "select", options: ["sm", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "Padrão", variant: "default" } };
export const Primary: Story = { args: { children: "Primário", variant: "primary" } };
export const Success: Story = { args: { children: "Ativo", variant: "success" } };
export const Warning: Story = { args: { children: "Atenção", variant: "warning" } };
export const Error: Story = { args: { children: "Erro", variant: "error" } };
export const Info: Story = { args: { children: "Info", variant: "info" } };
export const SmallSize: Story = { args: { children: "Pequeno", size: "sm" } };
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {(["default", "primary", "success", "warning", "error", "info"] as const).map((v) => (
        <Badge key={v} variant={v}>{v}</Badge>
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  args: { children: "Dark", variant: "primary" },
  parameters: { backgrounds: { default: "dark" } },
};
