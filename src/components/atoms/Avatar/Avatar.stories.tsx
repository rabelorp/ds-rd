import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: "select", options: ["circle", "square"] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/150?img=3", alt: "Foto de perfil", size: "md" },
};
export const FallbackInitials: Story = {
  args: { name: "João Silva", size: "md" },
};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
        <Avatar key={s} name="Rafael B" size={s} />
      ))}
    </div>
  ),
};
export const Shapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Avatar name="Circular" shape="circle" size="lg" />
      <Avatar name="Quadrado" shape="square" size="lg" />
    </div>
  ),
};
export const DarkMode: Story = {
  args: { name: "Dark Mode", size: "md" },
  parameters: { backgrounds: { default: "dark" } },
};
