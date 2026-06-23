import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>Ativo</Badge>);
    expect(screen.getByText("Ativo")).toBeInTheDocument();
  });

  it("applies default variant by default", () => {
    render(<Badge>Test</Badge>);
    expect(screen.getByText("Test").className).toMatch(/default/);
  });

  it.each(["default", "primary", "success", "warning", "error", "info"] as const)(
    "applies %s variant class",
    (variant) => {
      render(<Badge variant={variant}>{variant}</Badge>);
      expect(screen.getByText(variant).className).toMatch(new RegExp(variant));
    }
  );

  it("applies size class", () => {
    render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small").className).toMatch(/sm/);
  });
});
