import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular", disabled: true },
];

const meta: Meta<typeof Select> = { title: "Atoms/Select", component: Select, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = { args: { options, label: "Framework" } };
export const WithPlaceholder: Story = { args: { options, placeholder: "Selecione um framework..." } };
export const Error: Story = { args: { options, label: "Framework", error: "Seleção obrigatória" } };
export const Disabled: Story = { args: { options, label: "Desabilitado", disabled: true } };
export const DarkMode: Story = {
  args: { options, label: "Dark" },
  parameters: { backgrounds: { default: "dark" } },
};
