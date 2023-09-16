import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { evaluateOperation, removeLeadingZeros } from "../helpers/evaluations"

export const SuperCalculator = () => {
  const [operation, setOperation] = useState("0");

  const textButtons = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0"];

  const concatSimbol = (e: MouseEvent, text: string) => {
    e.preventDefault();
    if (operation==="Syntax Error" || operation[0]==='='){
      setOperation(removeLeadingZeros(text));
    } else {
      setOperation(removeLeadingZeros(operation+text));
    }
  };

  const deleteSymbol = (e: MouseEvent) => {
    e.preventDefault();
    if (operation==="Syntax Error" || operation[0]==='=' || operation.length === 1){
      setOperation("0");
    } else {
      setOperation(operation.slice(0,-1));
    }
  };

  const clearInput = (e: MouseEvent) => {
    e.preventDefault();
    setOperation("0");
  };

  const evaluateResult = (e: FormEvent) => {
    e.preventDefault();
    if(operation==="Syntax Error" || operation[0]==="="){
      return;
    }
    
    const result = String(evaluateOperation(operation));
    setOperation((result==="Syntax Error"? "":"=")+result);
  };

  return (
    <div className="max-w-xs w-full mb-5 p-4 pt-8 
      bg-cyan-800 rounded-lg">
      <form onSubmit={evaluateResult}>

        <input
          id="operation"
          type="text"
          value={operation}
          readOnly
          className="outline-none w-full py-1 px-2 mb-4
            border-2 border-black bg-slate-200
            text-right text-3xl" />

        <Button text={"Clear"} handler={clearInput} 
          className="bg-red-500 px-4 text-xl"/>

        <div className="grid grid-cols-4 grid-rows-5">

          <Button text="Del" handler={deleteSymbol} className="text-xl" />
          {
            textButtons.map((b, i) =>
              <Button className={""} key={i} text={b} handler={concatSimbol} />
            )
          }
          <input
            type="submit"
            value="="
            className="cursor-pointer col-span-2
              bg-cyan-500 m-1 rounded-full pb-2
              text-4xl font-bold text-white
              active:bg-cyan-200 active:text-black"
          />
        </div>
      </form>
    </div >
  )
}