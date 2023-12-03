import React from "react";
import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Linjer from "./Linjer";

const mockBusLines = [
  {
    lineNumber: "123",
    stops: 5,
    stopPointNames: ["Stop1", "Stop2", "Stop3", "Stop4", "Stop5"],
  },
  {
    lineNumber: "456",
    stops: 3,
    stopPointNames: ["StopA", "StopB", "StopC"],
  },
];

beforeEach(() => {
  const mockResponse = {
    ok: true,
    json: jest.fn().mockResolvedValue(mockBusLines),
    headers: new Headers(),
    redirected: false,
    status: 200,
    statusText: "OK",
  };

  jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse as unknown as Response);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Linjer component", () => {
  it("should display loading at initial render", () => {
    render(<Linjer onLineNumberClick={() => {}} />);
    expect(screen.getByText("Loading...")).toBeVisible();
  });

  it("should display bus lines and handle click events", async () => {
    render(<Linjer onLineNumberClick={() => {}} />);
    
    // Vänta tills komponenten har färdigställt inläsningen
    await waitFor(() => {
      expect(screen.getByText("Välj Buslinje för att se alla hållplatser")).toBeInTheDocument();
    });

    // Kontrollera om busslinjerna är renderade
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("456")).toBeInTheDocument();

    // Simulera klick på en busslinje
    act(() => {
      fireEvent.click(screen.getByText("123"));
    });

    // Kontrollera om klickhändelsen hanteras korrekt
    expect(screen.getByText("123")).toHaveClass("selected");
    expect(screen.getByText("456")).not.toHaveClass("selected");
  });
});
