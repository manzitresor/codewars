function operation(numbers: number[]): number{
    return numbers
            .map((num, index) => num > 0 ? num ** 2 : num)
            .map((num, index) => (index + 1) % 3 === 0 ? num * 3 : num)
            .map((num, index) => (index + 1) % 5 === 0 ? num * 5 : num)
            .reduce((acc,curr) => acc + curr,0)
}