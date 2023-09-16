import { fireEvent, render, screen } from '@testing-library/react';
import { SuperCalculator } from '../../components/SuperCalculator';

test("Se debe verificar que se rendericen los botones con los numeros", () => {
    render(<SuperCalculator />);
    
    const numbers = screen.getAllByText(/\d/)
    expect(numbers).toHaveLength(10);
});

test("Se debe verificar que se actualice la pantalla de la calculadora al presionar botones", () => {
    render(<SuperCalculator />);
    
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("6"));
    
    const result = screen.getByRole("textbox") as HTMLInputElement;
    expect(result.value).toEqual("8216");
});

test("Se debe verificar que se realice una suma correctamente", () => {
    render(<SuperCalculator />);
    
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("="));
    
    const result = screen.getByRole("textbox") as HTMLInputElement;
    expect(result.value).toEqual("=73");
});