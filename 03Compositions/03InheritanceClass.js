class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the superclass constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks!`);
    }
}

// Usage
const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // "Buddy barks!"
