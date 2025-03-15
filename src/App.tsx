import { useState, ChangeEvent } from 'react';
import './App.css';

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function App() {
  const [person, setPerson] = useState<Person>({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      [id]: id === 'age' ? Number(value) : value, // Convert age to number
    }));
  };

  const computedOutput = ()=>{
    let textOuput:string = ''
    textOuput = person.firstName?`My name is ${person.firstName} ${person.lastName}` : ""

    if(person.age){
      textOuput += ` and my age is ${person.age}`
    }

    return textOuput || 'Please enter your details.';
  };

  return (
    <>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={person.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={person.age} onChange={handleChange} />
      </div>
      {computedOutput()}
    </>
  );
}

export default App;
