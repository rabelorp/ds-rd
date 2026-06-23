import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders input element", () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("associates label with input via htmlFor", () => {
    render(<Input label="Nome" />);
    const label = screen.getByText("Nome");
    const input = screen.getByRole("textbox");
    expect(label).toHaveAttribute("for", input.id);
  });

  it("shows error message with role=alert", () => {
    render(<Input error="Campo obrigatório" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Campo obrigatório");
  });

  it("sets aria-invalid when error is present", () => {
    render(<Input error="Error" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("renders disabled state", () => {
    render(<Input disabled label="Disabled" />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders helperText when no error", () => {
    render(<Input helperText="Dica útil" />);
    expect(screen.getByText("Dica útil")).toBeInTheDocument();
  });

  it("does not render helperText when error is present", () => {
    render(<Input error="Erro" helperText="Dica" />);
    expect(screen.queryByText("Dica")).not.toBeInTheDocument();
  });
});
