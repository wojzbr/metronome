import './metronome.css'
import Buttons from '../buttons/Buttons';
import Screen from '../screen/Screen';
import {useState} from 'react'

const Metronome = () => {

    const [lastClick, setLastClick] = useState();
    const [BPM, setBPM] = useState(60);
    const [tickingInterval, setTickingInterval] = useState();
    const [isBeating, setIsBeating] = useState(false)
  
    const calcBPM = () => {
        if (!lastClick) setLastClick( (new Date()).getTime() )
        else {
            const newClick = (new Date()).getTime()
            setBPM(60000/(newClick-lastClick))
            setLastClick(newClick)
        }
    }
    const changeBPM = (num) => {
        setBPM(BPM+num)
    }
    const tapTempo = () => {
        calcBPM();
    }
    const beat = () => {
        if(!isBeating){
            document.getElementById("playPause").style.background="red"
            setTimeout(()=>document.getElementById("playPause").style.background="black", 100);
  
            setTickingInterval(window.setInterval(()=>{
              document.getElementById("playPause").style.background="red";
              setTimeout(()=>document.getElementById("playPause").style.background="black", 100);
            }, (60/BPM) * 1000) )
  
            setIsBeating(true)
          }
          else if(isBeating){          
            setIsBeating(false)
            window.clearInterval(tickingInterval);
          }
    }

    return(
        <div id="metronomeWrapper">
            <div id="metronome">
                <Screen BPM={BPM}/>
                <Buttons
                    changeBPM={changeBPM}
                    tapTempo={tapTempo}
                    beat={beat}
                />
                <div id="blackBottomPanel" />
            </div>
        </div>
        
    )
}

export default Metronome;