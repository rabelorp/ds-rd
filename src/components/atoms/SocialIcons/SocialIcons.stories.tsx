import type { Meta, StoryObj } from "@storybook/react";
import { SocialIcons } from "./SocialIcons";
import type { SocialLink } from "./SocialIcons";

const allLinks: SocialLink[] = [
  { platform: "linkedin", url: "https://linkedin.com/company/rabelodigital" },
  { platform: "instagram", url: "https://instagram.com/rabelodigital" },
  { platform: "github", url: "https://github.com/rabelorp" },
  { platform: "youtube", url: "https://youtube.com/@rabelodigital" },
  { platform: "whatsapp", url: "https://wa.me/5517981410907" },
];

const meta: Meta<typeof SocialIcons> = {
  title: "Atoms/SocialIcons",
  component: SocialIcons,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof SocialIcons>;

export const Default: Story = { args: { links: allLinks } };
export const Subset: Story = {
  args: {
    links: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
    ],
  },
};
export const LargeSize: Story = { args: { links: allLinks, size: "lg" } };
export const DarkMode: Story = {
  args: { links: allLinks },
  parameters: { backgrounds: { default: "dark" } },
};
