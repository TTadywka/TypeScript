function multiplyMatrices(matrix1: number[][], matrix2: number[][]): number[][] | string {
    const result: number[][] = [];
    
    if (matrix1[0].length !== matrix2.length) {
        return "Ошибка, число стобцов и строк двух матриц не соотвествует ожидаемому(matrix1:" + matrix1[0].length+"x"+matrix1.length + " matrix2:" + matrix2[0].length + "x" + matrix2.length + ")";
    }
    else
    {
        for (let i = 0; i < matrix1.length; i++) {
            const row: number[] = [];
            for (let j = 0; j < matrix2[0].length; j++) {
                let product = 0;
                for (let k = 0; k < matrix2.length; k++) {
                    product += matrix1[i][k] * matrix2[k][j];
                }
                row.push(product);
            }
            result.push(row);
        }
    }

    return result;
}

const matrixA: number[][] = [[1, 2], [3, 4]];
const matrixB: number[][] = [[5, 6], [7, 8]];
const matrixC: number[][] = [[5, 6], [7, 8], [7, 8]];

const result: number[][] | string = multiplyMatrices(matrixA, matrixB);
const result_error: number[][] | string = multiplyMatrices(matrixA, matrixC);
console.log(result);
console.log(result_error);  