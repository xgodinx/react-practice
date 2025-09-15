import Button from '../../Base/Button/Button';
import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const timerValue: any = useRef(null);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  function resetTimer() {
    setIsTimerActive(false);
    setTimer(0);
  }

  useEffect(() => {
    if (isTimerActive) {
      timerInterval.current = setInterval(() => {
        setTimer((prev) => {
          if (prev < 0) {
            clearInterval(timerInterval.current!);
            setIsTimerActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerInterval.current) clearInterval(timerInterval.current);
    };
  }, [isTimerActive]);

  return (
    <div className="timer">
      <p className="timer__value">{timer} seconds</p>
      <input type="number" placeholder="Enter seconds" ref={timerValue} />
      <Button
        onClick={() => {
          setTimer(timerValue.current?.value);
          setIsTimerActive(true);
        }}
      >
        Launch
      </Button>
      <Button onClick={() => setIsTimerActive(false)}>Stop</Button>
      <Button onClick={resetTimer}>Reset</Button>
    </div>
  );
}

export default Timer;
