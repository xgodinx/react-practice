import { useEffect, useState, useRef } from 'react';
import Button from '../../Base/Button/Button';
function Joke() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  // const jokeRef = useRef(null)

  async function fetchJoke() {
    setLoading(true);
    const fetchedJoke = await fetch('https://api.chucknorris.io/jokes/random');

    const jsonJoke = await fetchedJoke.json();

    console.log(jsonJoke);
    setLoading(false);
    if (isButtonPressed) {
      setJoke(jsonJoke.value);
    }
  }

  useEffect(() => {
    fetchJoke();
    setIsButtonPressed(false);
  }, [isButtonPressed]);

  return (
    <div>
      <p>{!joke ? 'If you are sad, u can get some jokes!' : 'Here you go!'}</p>
      <p
        style={{
          fontSize: '22px',
          maxWidth: '100%',
          backgroundImage:
            'linear-gradient(135deg,rgb(255, 255, 255),rgb(255, 8, 185))',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {loading ? 'Loading joke' : joke}
      </p>
      <Button onClick={() => setIsButtonPressed(true)}>
        {joke ? 'Another joke' : 'Show joke'}
      </Button>
    </div>
  );
}

export default Joke;
