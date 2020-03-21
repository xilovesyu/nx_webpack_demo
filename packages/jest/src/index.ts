const sum = (a: number, b: number) => {
    return a + b
}

const multi = (a: number, b: number) => {
    return a * b
}

const divide = (a: number, b: number) => {
    if (b === 0) {
        return NaN
    } else {
        return a/b
    }
}
export {sum, multi, divide}