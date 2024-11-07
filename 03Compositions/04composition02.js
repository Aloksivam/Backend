//composition can be used when requirements are not very clear
// Define small, reusable functions
//It is generally used in case of "is A" relationship
// like mihir is a man,
//(good for a class which derives its features from multiple classes)
const canWalk = person => ({
    walk: () => console.log(`${person.name} is walking`)
});

const canEat = person => ({
    eat: () => console.log(`${person.name} is eating`)
});

const canSwim = person => ({
    swim: () => console.log(`${person.name} is swimming`)
});

// Function to create a person with desired capabilities
const createPerson = (name, abilities) => {
    const person = { name };
    return { ...person, ...abilities(person) };
};

// Create new objects with different capabilities using composition
const walker = createPerson("Alice", canWalk);
walker.walk(); // Output: Alice is walking

const eaterSwimmer = createPerson("Bob", person => ({ ...canEat(person), ...canSwim(person) }));
eaterSwimmer.eat(); // Output: Bob is eating
eaterSwimmer.swim(); // Output: Bob is swimming
