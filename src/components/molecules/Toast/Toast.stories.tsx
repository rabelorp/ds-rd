import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "../../atoms/Button/Button";
import React from "react";

const meta: Meta = { title: "Molecules/Toast", tags: ["autodocs"] };
export default meta;

const ToastDemo = ({ variant }: { variant?: "default" | "success" | "warning" | "error" | "info" }) => {
  const { show } = useToast();
  return (
    <Button onClick={() => show({ title: "Notificação", description: "Exemplo de toast.", variant })}>
      Mostrar toast {variant ?? "default"}
    </Button>
  );
};

const withProvider = (Story: React.ComponentType) => (
  <ToastProvider><Story /></ToastProvider>
);

export const Success: StoryObj = {
  decorators: [withProvider],
  render: () => <ToastDemo variant="success" />,
};

export const Warning: StoryObj = {
  decorators: [withProvider],
  render: () => <ToastDemo variant="warning" />,
};

export const Error: StoryObj = {
  decorators: [withProvider],
  render: () => <ToastDemo variant="error" />,
};

export const Info: StoryObj = {
  decorators: [withProvider],
  render: () => <ToastDemo variant="info" />,
};

export const DarkMode: StoryObj = {
  decorators: [withProvider],
  render: () => <ToastDemo />,
  parameters: { backgrounds: { default: "dark" } },
};
