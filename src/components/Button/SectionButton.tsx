import Button from './Button';
import { useState } from 'react';
import { differences } from '../Data/Data';

function SectionButton() {
  const [content, setContent] = useState(null);

  function handleClick(text: any) {
    setContent(text);
  }
  return (
    <>
      <h3>Have a look at the result:</h3>
      <Button isActive={content === 'way'} onClick={() => handleClick('way')}>
        Click
      </Button>
      <Button
        isActive={content === 'programm'}
        onClick={() => handleClick('programm')}
      >
        Setup
      </Button>
      <Button isActive={content === 'form'} onClick={() => handleClick('form')}>
        Borrow
      </Button>

      {content ? (
        <p>Pressed: {differences[content]}</p>
      ) : (
        <p>Press to get info</p>
      )}
    </>
  );
}

export default SectionButton;
