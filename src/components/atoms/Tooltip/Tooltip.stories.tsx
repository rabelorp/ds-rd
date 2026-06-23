import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProvider } from "./Tooltip";
import { Button } from "../Button/Button";
import React from "react";

const meta: Meta = { title: "Atoms/Tooltip", tags: ["autodocs"] };
export default meta;

const withProvider = (Story: React.ComponentType) => (
  <TooltipProvider><div style={{ padding: 48, display: "inline-block" }}><Story /></div></TooltipProvider>
);

export const Top: StoryObj = {
  decorators: [withProvider],
  render: () => <Tooltip content="Tooltip no topo" side="top"><Button size="sm">Hover top</Button></Tooltip>,
};
export const Right: StoryObj = {
  decorators: [withProvider],
  render: () => <Tooltip content="Tooltip à direita" side="right"><Button size="sm">Hover right</Button></Tooltip>,
};
export const Bottom: StoryObj = {
  decorators: [withProvider],
  render: () => <Tooltip content="Tooltip abaixo" side="bottom"><Button size="sm">Hover bottom</Button></Tooltip>,
};
export const Left: StoryObj = {
  decorators: [withProvider],
  render: () => <Tooltip content="Tooltip à esquerda" side="left"><Button size="sm">Hover left</Button></Tooltip>,
};
export const DarkMode: StoryObj = {
  decorators: [withProvider],
  render: () => <Tooltip content="Dark tooltip" side="top"><Button size="sm">Dark</Button></Tooltip>,
  parameters: { backgrounds: { default: "dark" } },
};
