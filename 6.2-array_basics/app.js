const people = ["Greg", "Mary", "Devon", "James"];

//1.
    for (number of people) {
        console.log(number);
      }

//2. remove from start
people.shift();
console.log(people);

//3. remove from end
people.pop();
console.log(people);

//4.  add to start
people.unshift('Matt');
console.log(people);

//5. add to end
people.push('Ofir');
console.log(people);

//6. 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        console.log("Found Mary.. Stopping");
        break;
    }
  }

  // 7.
const peopleCopy = people.slice(2);
console.log(`new sliced array without Mary or Matt: [${peopleCopy}]`);

// 8.
console.log(`Mary is located at index: ${people.indexOf("Mary")}`);

// 9.
console.log(`Foo is located at index: ${people.indexOf("Foo")}`);

// 10.
people.splice(0, 4, "Greg", "Mary", "Devon", "James");
people.splice(2, 1);
people.splice(2, 0, "Elizabeth", "Artie");
console.log(people);

//11.
let withBob = people.concat(["Bob"]);
console.log(withBob);