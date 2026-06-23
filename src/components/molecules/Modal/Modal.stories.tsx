import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { Button } from "../../atoms/Button/Button";
import React from "react";

const meta: Meta<typeof Modal> = {
  title: "Molecules/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal title="Título do Modal" trigger={<Button>Abrir Modal</Button>}>
      <p>Conteúdo do modal aqui.</p>
    </Modal>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Modal
      title="Confirmar ação"
      description="Esta ação não pode ser desfeita. Deseja continuar?"
      trigger={<Button variant="danger">Excluir</Button>}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <Button variant="ghost" size="sm">Cancelar</Button>
        <Button variant="danger" size="sm">Excluir</Button>
      </div>
    </Modal>
  ),
};

export const LargeModal: Story = {
  render: () => (
    <Modal title="Modal Grande" size="lg" trigger={<Button>Abrir</Button>}>
      <p>Modal com mais espaço para conteúdo extenso.</p>
    </Modal>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <Modal title="Dark Mode" trigger={<Button>Abrir</Button>}>
      <p>Modal em dark mode.</p>
    </Modal>
  ),
  parameters: { backgrounds: { default: "dark" } },
};
