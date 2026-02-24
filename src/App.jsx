import './App.css'
import TimerChallenge from './components/TimerChallenge/TimerChallenge'

export default function App() {
  return <div id='challenges'>
    <TimerChallenge title="EASY" targetTime={1} />
    <TimerChallenge title="NOT EASY" targetTime={5} />
    <TimerChallenge title="GETTING TOUGH" targetTime={10} />
    <TimerChallenge title="PROS ONLY" targetTime={20} />
  </div>
}