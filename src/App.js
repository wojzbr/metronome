import { useEffect } from 'react';
import './App.css';
import Metronome from './metronome/Metronome';
import { preloadSound } from './utils/audioUtils';
import sound from './beep.mp3'
// import Clause from './clause/Clause'

function App() {

  useEffect(() => {
    preloadSound(sound)
      .catch(error => console.error('Error preloading sound:', error));
  }, []);

  return (
    <div className="App">
      <Metronome />
      {/* <Clause /> */}
    </div>
  );

}

export default App;
