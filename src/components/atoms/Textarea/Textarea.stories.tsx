import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: { placeholder: "Escreva algo..." } };
export const WithLabel: Story = { args: { label: "Mensagem", placeholder: "Sua mensagem..." } };
export const WithCharCount: Story = { args: { label: "Bio", maxLength: 200, showCount: true, placeholder: "Conte sobre você" } };
export const Error: Story = { args: { label: "Descrição", error: "Campo obrigatório" } };
export const Disabled: Story = { args: { label: "Desabilitado", disabled: true, value: "Texto fixo" } };
export const DarkMode: Story = {
  args: { label: "Dark mode", placeholder: "..." },
  parameters: { backgrounds: { default: "dark" } },
};
