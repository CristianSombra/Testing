import React from "react";
import { render, screen } from "@testing-library/react"

import HelloWorld from "./hello_world";

test('render Hello World', () => {
    render(<HelloWorld />)
    screen.debug();

    const title = screen.getByText(/hello world/i);
    expect(title).toBeInTheDocument();
});