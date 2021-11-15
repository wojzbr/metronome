import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [lastClick, setLastClick] = useState();
  const [BPM, setBPM] = useState(60);

  const calcBPM = () => {

    if (!lastClick) setLastClick( (new Date()).getTime() )

    else {
      const newClick = (new Date()).getTime()
      setBPM(60000/(newClick-lastClick))
      setLastClick(newClick)
    }

  }
  var metronomeTicking;
  return (
    <div className="App">
      <div id="btn-tap-bpm-wrapper">
        <div id="btn-tap-bpm" onClick={()=>{ calcBPM() }}>TAP</div>
      </div>
      <div>BPM: {Math.round(BPM)}</div>
      
      <div id="change-bpm-wrapper">
        <div className="btn-change-bpm" onClick={()=>setBPM(BPM-1)}>-</div>
        {Math.round(BPM)}
        <div className="btn-change-bpm" onClick={()=>setBPM(BPM+1)}>+</div>
      </div>

      <div id="metronome-start-btn" onClick={(e)=>{
        if(e.target.innerText=="START"){
          document.getElementById("metronome-diod").style.background="red"
          setTimeout(()=>document.getElementById("metronome-diod").style.background="pink", 100);
          metronomeTicking = window.setInterval(()=>{
            document.getElementById("metronome-diod").style.background="red";
            setTimeout(()=>document.getElementById("metronome-diod").style.background="pink", 100);
          }, (60/BPM) * 1000)
          e.target.innerText="STOP"
        }
        else {          
          e.target.innerText="START"
          window.clearInterval(metronomeTicking);
        }
        
      }}>START</div>
      <div id="metronome-diod" />
      <div id="clause"><a target="_blank" href="https://icons8.com/icon/Zyo5wDjgJxRW/red-circle" rel="noreferrer">Red Circle</a> favicon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a></div>
    </div>
  );
}

export default App;
