import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import React from "react";

const meta: Meta<typeof Tabs> = { title: "Molecules/Tabs", component: Tabs, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultTabs = [
  { value: "overview", label: "Visão geral", content: <p>Conteúdo da aba visão geral.</p> },
  { value: "details", label: "Detalhes", content: <p>Conteúdo da aba detalhes.</p> },
];

export const Default: Story = { args: { tabs: defaultTabs } };
export const ThreeTabs: Story = {
  args: {
    tabs: [
      ...defaultTabs,
      { value: "settings", label: "Configurações", content: <p>Configurações aqui.</p> },
    ],
  },
};
export const DarkMode: Story = {
  args: { tabs: defaultTabs },
  parameters: { backgrounds: { default: "dark" } },
};
