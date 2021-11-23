import './metronome.css'
import Buttons from '../buttons/Buttons';
import Screen from '../screen/Screen';
import {useState} from 'react'

const Metronome = () => {

    const [lastClick, setLastClick] = useState();
    const [BPM, setBPM] = useState(60);
    const [tickingInterval, setTickingInterval] = useState();
    const [isBeating, setIsBeating] = useState(false)
    const [turnedOn, setTurnedOn] = useState(false)
  
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
            document.getElementById("playPause").classList.add("redLED")
            setTimeout(()=>document.getElementById("playPause").classList.remove("redLED"), 100);
  
            setTickingInterval(window.setInterval(()=>{
              document.getElementById("playPause").classList.add("redLED")
              setTimeout(()=>document.getElementById("playPause").classList.remove("redLED"), 100);
            }, (60/BPM) * 1000) )
  
            setIsBeating(true)
          }
          else if(isBeating){          
            setIsBeating(false)
            window.clearInterval(tickingInterval);
          }
    }

    const turnOnOff = () => {
        if(document.getElementById("buttonsSwitchoffOverlay").style.zIndex==="-1") {
            document.getElementById("buttonsSwitchoffOverlay").style.zIndex="50"
            document.getElementById("power").classList.remove("redLED")
            setTurnedOn(false);
            setIsBeating(false)
            window.clearInterval(tickingInterval);
            setBPM(60);
        }
        else {
            document.getElementById("buttonsSwitchoffOverlay").style.zIndex="-1"
            document.getElementById("power").classList.add("redLED")
            setTurnedOn(true)
        }
    }

    return(
        <div id="metronomeWrapper">
            <div id="metronome">
                <Screen BPM={BPM} turnedOn={turnedOn}/>
                <Buttons
                    turnOnOff={turnOnOff}
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