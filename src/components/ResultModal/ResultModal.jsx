import "./ResultModal.css"

export default function ResultModal({ ref, timeRemaining, setTimeRemaining, targetTime }) {
  const lost = timeRemaining <= 0;
  const score = timeRemaining >= 0 ? Math.round((1 - timeRemaining / (targetTime * 1000)) * 100) : 0;

  function handleClose() {
    setTimeRemaining(targetTime * 1000);
    ref.current.close();
  }

  return <dialog ref = {ref}>
    {lost ?
      <h2>YOU LOST!</h2>
    : <>
      <h2>YOU STOPPED THE TIMER!</h2>
      <p>You stopped the timer with <strong>{timeRemaining / 1000} seconds</strong> left.</p>
    </>}
    <p>Your score is <strong>{score}</strong>.</p>
    <div className="button-container">
      <button onClick={handleClose}>Close</button>
    </div>
  </dialog>
}