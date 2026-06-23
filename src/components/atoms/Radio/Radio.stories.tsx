import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./Radio";

const meta: Meta<typeof RadioGroup> = { title: "Atoms/RadioGroup", component: RadioGroup, tags: ["autodocs"] };
export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = [
  { value: "a", label: "Opção A" },
  { value: "b", label: "Opção B" },
  { value: "c", label: "Opção C" },
];

export const Default: Story = { args: { options } };
export const Selected: Story = { args: { options, defaultValue: "b" } };
export const Horizontal: Story = { args: { options, orientation: "horizontal" } };
export const Disabled: Story = { args: { options, disabled: true } };
export const DarkMode: Story = {
  args: { options, defaultValue: "a" },
  parameters: { backgrounds: { default: "dark" } },
};
