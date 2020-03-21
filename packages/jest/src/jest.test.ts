import { divide, sum } from './index'

test('add 1+2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('divide 1/2', () => {
    expect(divide(1, 2)).toBe(0.5)
})