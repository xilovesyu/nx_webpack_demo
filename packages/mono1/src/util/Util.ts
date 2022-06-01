export const testPromise = new Promise((resolve) => {
  resolve('hello world')
})

const missArray = [3, 5, 6]
export const testArray = [1, 2, 4, ...missArray]

export const testArray2 = testArray.find((one: any) => {
  return one === 4
})
