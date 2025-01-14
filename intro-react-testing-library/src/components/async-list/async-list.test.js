import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AsyncList from "./async-list";

test('show the food data', async () => {
    render(<AsyncList/>)

    const hamburguer = await screen.findByText(/hamburguer/i);
    expect(hamburguer).toBeInTheDocument();
});