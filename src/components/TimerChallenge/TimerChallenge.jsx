import { useRef, useState } from 'react'
import './TimerChallenge.css'

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerRunning(false);
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerRunning(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return <section className="challenge">
    <h2>{title}</h2>
    <p>{targetTime} second{targetTime > 1 && "s"}</p>
    <button onClick={timerRunning ? handleStop : handleStart}>
      {timerRunning ? "Stop Timer" : "Start Challenge"}
    </button>
    <p className={`${timerRunning && "active"}`}>
      {timerRunning ? "Timer is runnin..." : "Timer inactive"}
    </p>
  </section>
}