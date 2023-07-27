import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  ReactDOM.createRoot(root).render(<App />);
  ReactDOM.unmountComponentAtNode(root);
});

describe("Addition", () => {
  it("knows that 2 + 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});