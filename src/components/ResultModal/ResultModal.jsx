import "./ResultModal.css"

export default function ResultModal({ ref, timeRemaining, setTimeRemaining, targetTime }) {
  const lost = timeRemaining <= 0;
  const score = timeRemaining >= 0 ? Math.round((1 - timeRemaining / (targetTime * 1000)) * 100) : 0;

  return <dialog ref={ref} onClose={() => setTimeRemaining(targetTime * 1000)}>
    {lost ? <h2>YOU LOST!</h2> : <h2>Score: {score}</h2>}
    <p>The target time was <strong>{targetTime} second{targetTime > 1 && "s"}</strong>.</p>
    {!lost && <p>You stopped the timer with <strong>{timeRemaining / 1000} seconds</strong> left.</p>}
    <p></p>
    <form method="dialog">
      <button>Close</button>
    </form>
  </dialog>
}