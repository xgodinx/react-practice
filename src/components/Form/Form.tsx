import './Form.scss';
import Button from '../Button/Button';
import { useState } from 'react';
function Form() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [hasError, setHasError] = useState(false);
  const [selected, setSelected] = useState('Select');

  function handleNameChange(event: any) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
    console.log(hasError);
  }
  function handlePassChange(event: any) {
    setPass(event.target.value);
    setHasError(event.target.value.trim().length === 0);
    console.log(hasError);
  }

  return (
    <section>
      <h3 className="form__title">Please fill the form!</h3>
      <form className="form">
        <input
          type="text"
          className="input__field"
          placeholder="Name"
          value={name}
          style={{ border: hasError ? '1px solid red' : '' }}
          onChange={handleNameChange}
        />
        <input
          type="password"
          className="input__field"
          placeholder="Password"
          value={pass}
          style={{ border: hasError ? '1px solid red' : '' }}
          onChange={handlePassChange}
        />
        <label htmlFor="reason">Select option</label>
        <select
          id="reason"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">None</option>
          <option value="Car">Car</option>
          <option value="House">House</option>
          <option value="Yacht">Yacht</option>
        </select>
        <Button disabled={hasError} isActive={!hasError}>
          Send
        </Button>

        <pre>
          Name: {name}
          <br />
          Password: {pass}
          <br />
          selected: {selected}
        </pre>
      </form>
    </section>
  );
}

export default Form;
