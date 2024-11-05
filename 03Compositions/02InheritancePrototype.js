
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Call the parent constructor with 'this'
    this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    console.log(`${this.name} barks!`);
};

// Usage
const dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // "Buddy barks!"
