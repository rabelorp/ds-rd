import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Modal } from "./Modal";
import { Button } from "../../atoms/Button/Button";

describe("Modal", () => {
  it("does not render content when closed", () => {
    render(<Modal open={false} title="Test"><p>Hidden</p></Modal>);
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(<Modal open title="Test Modal"><p>Visible</p></Modal>);
    expect(screen.getByText("Visible")).toBeInTheDocument();
  });

  it("renders title when open", () => {
    render(<Modal open title="Meu Modal"><p>Content</p></Modal>);
    expect(screen.getByText("Meu Modal")).toBeInTheDocument();
  });

  it("calls onOpenChange(false) on close button click", () => {
    const onOpenChange = vi.fn();
    render(<Modal open onOpenChange={onOpenChange} title="Test"><p>Content</p></Modal>);
    fireEvent.click(screen.getByRole("button", { name: "Fechar" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("calls onOpenChange(false) on Escape key", () => {
    const onOpenChange = vi.fn();
    render(<Modal open onOpenChange={onOpenChange} title="Test"><p>Content</p></Modal>);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("opens via trigger", () => {
    render(
      <Modal title="Triggered" trigger={<Button>Open</Button>}>
        <p>Trigger content</p>
      </Modal>
    );
    fireEvent.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByText("Trigger content")).toBeInTheDocument();
  });
});
