import { useRef, useState } from 'react'
import ResultModal from '../ResultModal/ResultModal';
import './TimerChallenge.css'

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const modal = useRef();

  const timerRunning = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining < 0) {
    handleStop();
  }

  function handleStart() {
    timer.current = setInterval(() => setTimeRemaining(prev => prev - 10), 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    modal.current.showModal();
  }

  return <>
    <ResultModal ref={modal} timeRemaining={timeRemaining} targetTime={targetTime}
      setTimeRemaining={setTimeRemaining}
    />

    <section className="challenge">
      <h2>{title}</h2>
      <p>{targetTime} second{targetTime > 1 && "s"}</p>
      <button onClick={timerRunning ? handleStop : handleStart}>
        {timerRunning ? "Stop Timer" : "Start Challenge"}
      </button>
      <p className={`${timerRunning && "active"}`}>
        {timerRunning ? "Timer is runnin..." : "Timer inactive"}
      </p>
    </section>
  </>
}