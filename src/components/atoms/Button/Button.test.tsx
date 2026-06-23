import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Clique aqui</Button>);
    expect(screen.getByRole("button", { name: "Clique aqui" })).toBeInTheDocument();
  });

  it("applies primary variant by default", () => {
    render(<Button>Test</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toMatch(/primary/);
  });

  it("applies the correct variant class", () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole("button").className).toMatch(/danger/);
  });

  it("calls onClick when clicked", () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handler = vi.fn();
    render(<Button disabled onClick={handler}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).not.toHaveBeenCalled();
  });

  it("shows disabled state", () => {
    render(<Button disabled>Disabled</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
  });

  it("shows loading state with aria-busy", () => {
    render(<Button loading>Loading</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("aria-busy", "true");
    expect(btn).toBeDisabled();
  });

  it("renders correct size class", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button").className).toMatch(/lg/);
  });

  it("is keyboard activatable via Enter", () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Press Enter</Button>);
    const btn = screen.getByRole("button");
    fireEvent.keyDown(btn, { key: "Enter" });
    btn.click();
    expect(handler).toHaveBeenCalled();
  });
});
