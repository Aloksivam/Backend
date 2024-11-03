const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    hobbies: ["reading", "travelling", "swimming"],
    address: {
        street: "123 Maple St",
        city: "Springfield",
        state: "IL",
        zip: "62704"
    },
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};
const {firstName, ...rest} = person
const {firstName:fname} = person //renaming the given property to fname
// console.log(firstName)// it will give undefined

const { address: { city, state } } = person;

console.log(city); // Output: Springfield
console.log(state); // Output: IL

//setting default value

const { middleName = "N/A" } = person;
console.log(middleName); // Output: N/A

//destructuring in function

function displayPerson({ firstName, lastName, age }) {
    console.log(`${firstName} ${lastName} is ${age} years old.`);
}

displayPerson(person); // Output: John Doe is 30 years old.
console.log(rest)

let hobbies;
({hobbies} = person)
console.log(hobbies)
const newobj = {
    newProperty:'new',
    ...person
}
console.log(newobj)