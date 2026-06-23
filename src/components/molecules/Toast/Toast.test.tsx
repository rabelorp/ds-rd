import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ToastProvider, useToast } from "./Toast";

const ShowButton = ({ title }: { title: string }) => {
  const { show } = useToast();
  return <button onClick={() => show({ title })}>Show</button>;
};

describe("Toast / useToast", () => {
  it("throws when used outside ToastProvider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<ShowButton title="test" />)).toThrow();
    spy.mockRestore();
  });

  it("shows a toast on trigger", async () => {
    render(
      <ToastProvider>
        <ShowButton title="Operação realizada" />
      </ToastProvider>
    );
    await act(async () => { fireEvent.click(screen.getByRole("button", { name: "Show" })); });
    expect(screen.getByText("Operação realizada")).toBeInTheDocument();
  });

  it("toast viewport has aria-label for screen readers", () => {
    render(<ToastProvider><div /></ToastProvider>);
    expect(screen.getByRole("region", { name: "Notificações" })).toBeInTheDocument();
  });
});
