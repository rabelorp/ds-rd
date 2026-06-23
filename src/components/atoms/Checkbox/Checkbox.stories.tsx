import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = { title: "Atoms/Checkbox", component: Checkbox, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Aceito os termos" } };
export const Checked: Story = { args: { label: "Marcado", checked: true } };
export const Indeterminate: Story = { args: { label: "Indeterminado", checked: "indeterminate" } };
export const Disabled: Story = { args: { label: "Desabilitado", disabled: true } };
export const WithLabel: Story = { args: { label: "Lembrar de mim" } };
export const DarkMode: Story = {
  args: { label: "Dark mode", checked: true },
  parameters: { backgrounds: { default: "dark" } },
};
