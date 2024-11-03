const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
    { name: "Eve", age: 22 }
];

//reduce returns a single value and 0 is default value

// const res = people.reduce((prevVal,currValue)=>{return prevVal+currValue.age},0)
const res = people.reduce((prevVal,currValue)=>prevVal+currValue.age,0) //first time value of prevVal is 0
console.log(res)
const names = people.reduce((prevVal,currValue)=>`${prevVal} ${currValue.name}`,"") //first time value of prevVal is 0
console.log(names)

//reduceright starts iterating from end
const names_ = people.reduceRight((prevVal,currValue)=>`${prevVal} ${currValue.name}`,"") //first time value of prevVal is 0
console.log(names_)