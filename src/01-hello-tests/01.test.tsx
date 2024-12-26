import {mult, splitIntoWords, sum} from "./01";

let a:number
let b:number
let c:number

beforeEach(
    ()=>{
        a=1
        b=2
        c=3
    }
)
test('sun should be correct', () => {
    //data
let a = 1
let b = 2
let c = 3
    //action
    const result = sum(a,b)

    //result
    expect(result).toBe(3)
})

test('Multiply should be correct', () => {
    //data
    let a = 1
    let b = 2
    //action
    const result = mult(a,b)

    //result
    expect(result).toBe(2)
})

test('Split words should be correct', () => {
    //data
    let a = 'hello World';
    let b = 'Goodbuy world'
    //action
    const result = splitIntoWords(a)
    const result2 = splitIntoWords(b)

    //result
    expect(result[0]).toBe('hello')
    expect(result2[0]).toBe('Goodbuy')
})