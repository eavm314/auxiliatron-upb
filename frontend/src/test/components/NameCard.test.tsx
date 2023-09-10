import { render, screen } from "@testing-library/react"
import { NameCard } from "../../components/NameCard";
// jest = require("@testing-library/react")

test('Verificar el renderizado de Component', () => {
    render(<NameCard name="Enrique"/>);
    const text = screen.getByText(/Enrique/i);
    expect(text).toBeTruthy();
});