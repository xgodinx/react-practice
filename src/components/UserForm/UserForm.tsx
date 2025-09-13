import { useState } from 'react';

function UserForm() {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  return (
    <div>
      <input
        placeholder="Name"
        type="text"
        value={inputName}
        onInput={(e) => setInputName(e.target.value)}
      />
      <input
        placeholder="Age"
        type="number"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
      />

      <p>
        Hi, {inputName ? inputName : 'friend!'}! You are{' '}
        {inputAge ? inputAge : 'noAge'} y.o
      </p>
    </div>
  );
}

export default UserForm;
