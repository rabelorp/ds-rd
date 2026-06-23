import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../../atoms/Button/Button";
import React from "react";

const meta: Meta<typeof Drawer> = { title: "Molecules/Drawer", component: Drawer, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Drawer>;

export const Right: Story = { render: () => <Drawer title="Drawer" side="right" trigger={<Button>Abrir direita</Button>}><p>Conteúdo</p></Drawer> };
export const Left: Story = { render: () => <Drawer title="Drawer" side="left" trigger={<Button>Abrir esquerda</Button>}><p>Conteúdo</p></Drawer> };
export const Top: Story = { render: () => <Drawer title="Drawer" side="top" trigger={<Button>Abrir topo</Button>}><p>Conteúdo</p></Drawer> };
export const Bottom: Story = { render: () => <Drawer title="Drawer" side="bottom" trigger={<Button>Abrir baixo</Button>}><p>Conteúdo</p></Drawer> };
export const DarkMode: Story = {
  render: () => <Drawer title="Dark" trigger={<Button>Abrir</Button>}><p>Conteúdo</p></Drawer>,
  parameters: { backgrounds: { default: "dark" } },
};
