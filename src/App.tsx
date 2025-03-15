import { useState } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const handleFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  const handleAge = (e) => {
    setPerson({ ...person, age: Number(e.target.value) });
  };

  const computedOutput = person.firstName
    ? `My name is ${person.firstName}`
    : '';

  return (
    <>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          value={person.firstName}
          onChange={handleFirstName}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          value={person.lastName}
          onChange={handleLastName}
        />
      </div>
      <div>
        {' '}
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={person.age} onChange={handleAge} />
      </div>
      {computedOutput}
    </>
  );
}

export default App;
