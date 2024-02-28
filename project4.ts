import * as readlineSync from 'readline-sync';

function fibonacci(n: number): number {
    if (n < 0) {
        return -1; 
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n: number = parseFloat(readlineSync.question('n: '));
console.log(fibonacci(n))