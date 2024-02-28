import * as readlineSync from 'readline-sync';

const x: number = parseFloat(readlineSync.question('x: '));
const y: number = parseFloat(readlineSync.question('y: '));
const centerX: number = 1.625;
const centerY: number = 1.625;
const radius: number = 0.875;

if ((x - centerX) ** 2 + (y - centerY) ** 2 <= radius ** 2) 
    {
        console.log(true);
    } 
else 
    {
        console.log(false);
    }
