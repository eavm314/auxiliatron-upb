import { render, fireEvent } from '@testing-library/react';
import { Calculator } from '../../components/Calculator';

test("Se deben sumar dos números positivos y mostrar el resultado", () => {
    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const input1 = getByPlaceholderText('Ingrese el primer número');
    const input2 = getByPlaceholderText('Ingrese el segundo número');
    const addButton = getByText('Sumar');

    fireEvent.change(input1, { target: { value: '32' } });
    fireEvent.change(input2, { target: { value: '9' } });
    fireEvent.click(addButton);

    const result = getByText('Resultado: 41');
    expect(result).toBeTruthy();
});

test("Se deben sumar dos números negativos y mostrar el resultado", () => {
    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const input1 = getByPlaceholderText('Ingrese el primer número');
    const input2 = getByPlaceholderText('Ingrese el segundo número');
    const addButton = getByText('Sumar');

    fireEvent.change(input1, { target: { value: '-29' } });
    fireEvent.change(input2, { target: { value: '-63' } });
    fireEvent.click(addButton);

    const result = getByText('Resultado: -92');
    expect(result).toBeTruthy();
});

test("Se deben sumar dos números decimales y mostrar el resultado", () => {
    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const input1 = getByPlaceholderText('Ingrese el primer número');
    const input2 = getByPlaceholderText('Ingrese el segundo número');
    const addButton = getByText('Sumar');

    fireEvent.change(input1, { target: { value: '12.3' } });
    fireEvent.change(input2, { target: { value: '51.25' } });
    fireEvent.click(addButton);

    const result = getByText('Resultado: 63.55');
    expect(result).toBeTruthy();
});

test("Debe validar que los campos sean numéricos", () => {
    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const input1 = getByPlaceholderText('Ingrese el primer número');
    const input2 = getByPlaceholderText('Ingrese el segundo número');
    const addButton = getByText('Sumar');

    fireEvent.change(input1, { target: { value: 'abc' } });
    fireEvent.change(input2, { target: { value: '3' } });
    fireEvent.click(addButton);

    const result = getByText('Por favor, ingrese números válidos.');
    expect(result).toBeTruthy();
});

test("Debe validar que los campos no estén vacios", () => {
    const { getByPlaceholderText, getByText } = render(<Calculator />);
    const input1 = getByPlaceholderText('Ingrese el primer número');
    const input2 = getByPlaceholderText('Ingrese el segundo número');
    const addButton = getByText('Sumar');

    fireEvent.change(input1, { target: { value: '' } });
    fireEvent.change(input2, { target: { value: '12' } });
    fireEvent.click(addButton);

    const result = getByText('Por favor, ingrese números válidos.');
    expect(result).toBeTruthy();
});