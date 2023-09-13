import { evaluate } from "mathjs"

export const evaluateOperation = (operation) => {
    try {
        return evaluate(operation);
    } catch (error) {
        return "Syntax Error";
    }
};

export const removeLeadingZeros = (operation) => {
    const regex = /(^|[^\d])0+(\d+)/g;
    const replacement = '$1$2';
    
    return operation.replace(regex, replacement)
}