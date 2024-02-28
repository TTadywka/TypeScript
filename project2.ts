import * as readlineSync from 'readline-sync';

function LnX(inputValue: number): [number, number] {
    const exactValue: number = Math.log(1 + inputValue);
    const roundedValue: number = Math.ceil(exactValue * 100) / 100;
    return [exactValue, roundedValue];
}

const inputX: number = parseFloat(readlineSync.question('x: '));
const [exactValue, roundedValue]: [number, number] = LnX(inputX);
console.log("Точное значение:", exactValue);
console.log("Вычисленное значение:", roundedValue);

