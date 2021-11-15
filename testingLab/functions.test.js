const {
    returnTwo,
    greeting,
    add,
    multiply,
    subtract,
    divide
} = require("./functions")

test('testing returntwo returns two', ()=> {
    expect(returnTwo()).toEqual(2)
});

describe('greetings', ()=>{
    test("greeting should return with James", ()=>{
        expect(greeting('James')).toEqual("Hello, James.")
    })
    test("greeting should return with Jill", () =>{
        expect(greeting('Jill')).toEqual("Hello, Jill.")
    })
})


describe('Math Functions', ()=>{
    test("adding 1 and 2 should return 3", ()=> {
        expect(add(1,2)).toEqual(3)
    })
    test("adding 5 and 9 should return 14", ()=>{
        expect(add(5,9)).toEqual(14)
    })
    test("multiplying 10 and 2 should return 20", ()=>{
        expect(multiply(10,2)).toEqual(20)
    })
    test("mulptiplying 50 and 2 should return 100", ()=>{
        expect(multiply(50,2)).toEqual(100)
    })
    test("dividing 100 and 10 should return 10", ()=>{
        expect(divide(100,10)).toEqual(10)
    })
    test("dividing 25 and 5 should return 5", ()=>{
        expect(divide(25,5)).toEqual(5)
    })
    test("subtracting 30 and 6 should return 24", ()=>{
        expect(subtract(30,6)).toEqual(24)
    })
    test("subtracting 50 and 6 should return 44", ()=>{
        expect(subtract(50,6)).toEqual(44)
    })

})