import { useState } from "react";

export const Calculator = () => {
    const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const sumar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor, ingrese números válidos.');
    } else {
      const suma = num1 + num2;
      setResultado(`Resultado: ${suma}`);
    }
  };

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg w-1/3 mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-4">Calculadora</h1>
      <input
        type="number"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Ingrese el primer número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        placeholder="Ingrese el segundo número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white text-lg py-2 px-4 rounded hover:bg-blue-600"
        onClick={sumar}
      >
        Sumar
      </button>
      <p className="mt-4 text-lg">{resultado}</p>
    </div>
  );
}
