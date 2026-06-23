import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SocialIcons } from "./SocialIcons";

describe("SocialIcons", () => {
  it("renders only provided links", () => {
    render(
      <SocialIcons
        links={[
          { platform: "linkedin", url: "https://linkedin.com" },
          { platform: "github", url: "https://github.com" },
        ]}
      />
    );
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
  });

  it("each link has a descriptive aria-label", () => {
    render(
      <SocialIcons links={[{ platform: "linkedin", url: "https://linkedin.com" }]} />
    );
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "Seguir no LinkedIn");
  });

  it("uses custom label when provided", () => {
    render(
      <SocialIcons
        links={[{ platform: "github", url: "https://github.com", label: "Nosso GitHub" }]}
      />
    );
    expect(screen.getByRole("link")).toHaveAttribute("aria-label", "Nosso GitHub");
  });

  it("links open in new tab with rel noopener", () => {
    render(
      <SocialIcons links={[{ platform: "instagram", url: "https://instagram.com" }]} />
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
