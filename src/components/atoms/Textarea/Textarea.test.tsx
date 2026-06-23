import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders textarea element", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("shows character count when showCount and maxLength are provided", () => {
    render(<Textarea maxLength={100} showCount />);
    expect(screen.getByText("0/100")).toBeInTheDocument();
  });

  it("updates character count on input", () => {
    render(<Textarea maxLength={100} showCount />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "Olá" } });
    expect(screen.getByText("3/100")).toBeInTheDocument();
  });

  it("shows error with role=alert", () => {
    render(<Textarea error="Obrigatório" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Obrigatório");
  });

  it("renders disabled", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
