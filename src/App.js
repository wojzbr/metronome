import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [lastClick, setLastClick] = useState();
  const [BPM, setBPM] = useState();

  const calcBPM = () => {

    if (!lastClick) setLastClick( (new Date()).getTime() )

    else {
      const newClick = (new Date()).getTime()
      setBPM(60000/(newClick-lastClick))
      setLastClick(newClick)
    }

  }
  return (
    <div className="App">
      <div id="tapButtonWrapper">
        <div id="tapButton" onClick={()=>{

          calcBPM()
        }}>TAP</div>
      </div>
      <div>BPM: {BPM?Math.round(BPM):"-"}</div>
    </div>
  );
}

export default App;
