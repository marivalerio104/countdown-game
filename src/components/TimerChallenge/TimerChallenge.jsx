import './TimerChallenge.css'

export default function TimerChallenge({ title, targetTime }) {
  return <section className="challenge">
    <h2>{title}</h2>
    <p>{targetTime} second{targetTime > 1 && "s"}</p>
    <button>Start Challenge</button>
    <p>Time is runnin... / Timer inactive</p>
  </section>
}