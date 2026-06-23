import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Digite algo..." } };
export const WithLabel: Story = { args: { label: "Nome completo", placeholder: "João Silva" } };
export const Error: Story = { args: { label: "Email", value: "invalido", error: "Email inválido" } };
export const Disabled: Story = { args: { label: "Campo desabilitado", disabled: true, value: "Valor fixo" } };
export const SmallSize: Story = { args: { label: "Pequeno", size: "sm", placeholder: "sm" } };
export const LargeSize: Story = { args: { label: "Grande", size: "lg", placeholder: "lg" } };
export const DarkMode: Story = {
  args: { label: "Dark mode", placeholder: "..." },
  parameters: { backgrounds: { default: "dark" } },
};
