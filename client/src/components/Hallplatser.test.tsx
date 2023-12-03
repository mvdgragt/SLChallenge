// Hallplatser.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Hallplatser from "./Hallplatser";

const mockStops = [
  "Norrtälje busstation",
  "Älmsta busstation",
  "Harnäset",
  "Sjöängen",
  "Skeppsmyra affär",
  "Skeppsmyra by",
  "Skeppsmyra östra",
];

describe("The bus stops", () => {
  it("should show bus stop names", async () => {
    render(<Hallplatser clickedLineNumber="123" stopPointNames={mockStops} />);
    expect(screen.getByText("Norrtälje busstation")).toBeInTheDocument();
  });
});
