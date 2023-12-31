import { evaluate } from "mathjs"

export const evaluateOperation = (operation: string) => {
    try {
        return evaluate(operation);
    } catch (error) {
        return "Syntax Error";
    }
};

export const removeLeadingZeros = (operation: string) => {
    const regex = /(^|[^\d])0+(\d+)/g;
    const replacement = '$1$2';
    
    return operation.replace(regex, replacement)
}