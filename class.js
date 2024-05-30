class Person {
  constructor(name, age, country) {
    this.name =name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
  }
}
  const person1 = new Person('Purusoth', 25, 'India');
const person2 = new Person('Roshan', 28, 'Singapore');

// Display details of person1
console.log('Person-1 Details:');
person1.displayDetails();

// Display details of person2
console.log('\nPerson-2 Details:');
person2.displayDetails();
  

  //end-here
});