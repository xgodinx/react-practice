import { useRef, useState } from 'react';
import Button from '../../Base/Button/Button';
function UserForm() {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [isInputNamePressed, setIsInputNamePressed] = useState(false);
  const [isInputAgePressed, setIsInputAgePressed] = useState(false);

  const input: any = useRef(null);
  const age: any = useRef(null);
  const guestInfo = {
    name: inputName || 'enter name',
    age: inputAge || 'enter age',
  };

  function clickToEnterInputName() {
    setIsInputNamePressed(true);
    input.current?.focus();
  }
  function clickToEnterInputAge() {
    setIsInputAgePressed(true);
    age.current?.focus();
  }
  return (
    <div>
      <h2>
        {inputName === '' ? 'Please enter name' : 'Hi' + ' ' + inputName + '!'}
      </h2>
      <input
        disabled={!isInputNamePressed}
        ref={input}
        placeholder="Name"
        type="text"
        onChange={(e: any) => setInputName(e.target.value)}
      />
      <input
        disabled={!isInputAgePressed}
        ref={age}
        placeholder="Age"
        type="number"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
      />
      <div>
        <Button onClick={clickToEnterInputName}>Press to enter name</Button>
        <Button onClick={clickToEnterInputAge}>Press to enter age</Button>
      </div>
      <div>
        <pre>
          <code>{JSON.stringify(guestInfo, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}

export default UserForm;
