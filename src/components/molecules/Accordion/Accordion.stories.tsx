import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import React from "react";

const meta: Meta<typeof Accordion> = { title: "Molecules/Accordion", component: Accordion, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  { value: "q1", trigger: "O que é o Design System?", content: "Um conjunto de tokens, componentes e padrões reutilizáveis." },
  { value: "q2", trigger: "Como instalar?", content: "npm install @rabelodigital/ds-rd" },
  { value: "q3", trigger: "Posso personalizar os tokens?", content: "Sim, basta sobrescrever as CSS custom properties." },
];

export const Single: Story = { args: { items, type: "single" } };
export const Multiple: Story = { args: { items, type: "multiple" } };
export const DarkMode: Story = {
  args: { items, type: "single" },
  parameters: { backgrounds: { default: "dark" } },
};
