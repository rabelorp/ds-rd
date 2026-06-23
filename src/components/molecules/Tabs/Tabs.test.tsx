import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Tabs } from "./Tabs";

const tabs = [
  { value: "a", label: "Aba A", content: <p>Conteúdo A</p> },
  { value: "b", label: "Aba B", content: <p>Conteúdo B</p> },
];

describe("Tabs", () => {
  it("renders all tab triggers", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByRole("tab", { name: "Aba A" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Aba B" })).toBeInTheDocument();
  });

  it("shows first tab content by default", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText("Conteúdo A")).toBeInTheDocument();
  });

  it("switches content on tab click", () => {
    render(<Tabs tabs={tabs} />);
    fireEvent.click(screen.getByRole("tab", { name: "Aba B" }));
    expect(screen.getByText("Conteúdo B")).toBeInTheDocument();
  });

  it("tablist has correct role", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });
});
