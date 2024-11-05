 
// Composition in JavaScript is a pattern that promotes building complex behaviors by combining smaller, reusable functions or objects rather than relying on inheritance. It's a fundamental principle in functional programming and is often used to create flexible, modular, and testable code.

//supppose there is a class having methods a,b,c and class2 extends class1 and have methods d and other class3 also extends class1 have methods e , now we want a class having properties a,b,c,d,e then it is not possible to extend class1,2,3 at a time. so here requirement of composition arises.

function animalFeature (name){
    return {
        breathe:()=>console.log(`${name} breathes`),
        eat:()=>console.log(`${name} ate food`)
    }
}
function HumanFeature (name){
    return {
        code:()=>console.log(`${name} can code`)
    }
}
function BirdFeature (name){
    return {
    fly:()=>console.log(`${name} can  fly`)
    }
}

function createHuman(name){
    return {
        ...animalFeature(name),
        ...HumanFeature(name),
        name
    }
}
function createBird(name){
    return {
        ...BirdFeature(name),
        ...animalFeature(name),
        name
    }
}
function createFlyCodeHuman(name){
    return {
        ...animalFeature(name),
        ...HumanFeature(name),
        ...BirdFeature(name),
        name
    }
}
const alok = createFlyCodeHuman("alok++");
alok.fly();