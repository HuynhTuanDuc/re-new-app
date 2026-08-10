

function Self() {
  let greet = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}!`;
  }

  let sayHello = (name) => {
    console.log(`Hello, ${name}!`);
  }

  let person = {
    name: 'Alice',
    age: 30,
    greet: function () {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  };

  function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  // Destructuring assignments
  const numbers = [1, 2, 3, 4, 5];
  const [a, b, ...rest] = numbers;
  console.log("The a: ",a);
  console.log("The b:", b);
  console.log("The rest:", rest);

  //Object Destructuring
  const personObj = {
    name: `Tuan Duc`,
    age: 22,
    city: `Hanoi`,
  };
  console.log("Name: ", personObj.name)
  console.log("Age: ", personObj.age);
  console.log("City: ", personObj.city);

  function createFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
  }
  createFullName(`Tuan`, `Duc`);
  return (
    <div>
      <header>
        
        {/* <p>{greet('John', 'morning')}</p>
        <p>{greet('Jane', 'afternoon')}</p>
        <p>{sayHello('Bob')}</p>
        <p>{person.greet()}</p> */}
        <p>{sum(1, 2, 3)}</p>
        <p>{createFullName(`Tuan`, `Duc`)}</p>
      </header>
    </div>
  );
}

export default Self;
