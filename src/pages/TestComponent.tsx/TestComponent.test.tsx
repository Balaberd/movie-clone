import { screen, fireEvent, render } from "@testing-library/react";
import TestComponent from "./TestComponent";

describe("Hello COmp", () => {
  it("Hello rendered!", () => {
    render(<TestComponent text="Hello World" />);

    const helloElement = screen.getByText(/hello world/i);

    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText("input place");

    expect(helloElement).toBeInTheDocument();

    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("click test", () => {
    render(<TestComponent text="Hello World" />);

    const btn = screen.getByRole("button");
    expect(screen.queryByText(/toggle/i)).toBeNull;
    fireEvent.click(btn);
    expect(screen.getByText(/toggle/i)).toBeInTheDocument();
  });
});
