import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../../atoms/Button/Button";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    elevation: { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <Card.Body>Conteúdo simples do card.</Card.Body>
    </Card>
  ),
};

export const WithAllSlots: Story = {
  render: () => (
    <Card>
      <Card.Header>Título do Card</Card.Header>
      <Card.Body>
        <p>Conteúdo principal do card com texto descritivo sobre o assunto.</p>
      </Card.Body>
      <Card.Footer>
        <Button size="sm" variant="ghost">Cancelar</Button>
        <Button size="sm">Confirmar</Button>
      </Card.Footer>
    </Card>
  ),
};

export const ElevationVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
      {(["none", "sm", "md", "lg", "xl"] as const).map((e) => (
        <Card key={e} elevation={e} style={{ minWidth: 160 }}>
          <Card.Body>elevation: {e}</Card.Body>
        </Card>
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Card>
      <Card.Header>Dark Mode</Card.Header>
      <Card.Body>Card em modo escuro.</Card.Body>
    </Card>
  ),
  parameters: { backgrounds: { default: "dark" } },
};
