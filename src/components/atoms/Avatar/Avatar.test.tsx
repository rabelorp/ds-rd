import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders image when src is provided", () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="Foto" />);
    expect(screen.getByRole("img", { name: "Foto" })).toBeInTheDocument();
  });

  it("shows initials when name is provided and no src", () => {
    render(<Avatar name="João Silva" />);
    expect(screen.getByText("JS")).toBeInTheDocument();
  });

  it("shows initials on image load error", () => {
    render(<Avatar src="broken.jpg" name="Maria Oliveira" alt="Foto" />);
    const img = screen.getByRole("img");
    fireEvent.error(img);
    expect(screen.getByText("MO")).toBeInTheDocument();
  });

  it("extracts up to 2 initials from name", () => {
    render(<Avatar name="Ana Beatriz Carolina" />);
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("applies size class", () => {
    render(<Avatar name="Test" size="lg" />);
    const avatar = screen.getByRole("img");
    expect(avatar.className).toMatch(/lg/);
  });

  it("applies shape class", () => {
    render(<Avatar name="Test" shape="square" />);
    expect(screen.getByRole("img").className).toMatch(/square/);
  });
});
