function range_vision(number) {
    const digits = Array.from(String(number), Number); // Convierte el número en un array de sus números

    if (!digits.includes(1)) {
        return false; // Si no hay dígitos 1, devuelve false
    }

    let valueVisionOne = 0; // Valor mínimo de visión de 1 inicializado en 0
    var minValueVision = Infinity; // Valor minimo de visión de otros numeros inicializado en infinito.

    for (let i = 0; i < digits.length; i++) {

        const left = leftRange(digits, i); // Numeros de visión a la izquierda
        const right = rightRange(digits, i); // Numeros de visión a la derecha
        const visionValue = calculateVisionValue(left, right); // Suma total de visión


        if (digits[i] === 1) {
            valueVisionOne = visionValue; // Si hay un 1. setea valor de visión de 1 
        } else if (visionValue <= minValueVision) {
            minValueVision = visionValue // Si es otro número y es menor que el anterior se setea minValueVision
        }
    }

    return minValueVision >= valueVisionOne; // Devuelve true si el valor minimo de vision de 1 es menor o igual que cualquier otro.
}

function leftRange(digits, index) {
    return digits.slice(Math.max(index - digits[index], 0), index); // Corta los elementos de la izquierda
}

function rightRange(digits, index) {
    return digits.slice(index + 1, index + digits[index] + 1); // Corta los elementos de la derecha 
}

function calculateVisionValue(left, right) {
    return left.reduce((acc, val) => acc + val, 0) + right.reduce((acc, val) => acc + val, 0); // Suma todos los elementos.
}

console.log(range_vision(34315))