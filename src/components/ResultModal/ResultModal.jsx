import "./ResultModal.css"

export default function ResultModal({ result }) {
  return <dialog>
    <h2>YOU {result}!</h2>
    <p>You stopped the timer with <strong>x seconds</strong> left.</p>
    <form action="dialog"><button>Close</button></form>
  </dialog>
}