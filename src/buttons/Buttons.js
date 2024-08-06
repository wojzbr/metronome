import './buttons.css'
import Button from '../button/Button';
import ButtonsSwitchoffOverlay from '../buttonsSwitchoffOverlay/ButtonsSwitchoffOverlay';
import {AiOutlinePoweroff, AiFillCaretDown, AiFillCaretUp, AiFillCaretRight, AiOutlinePause, AiOutlineSound } from "react-icons/ai"

const Buttons = ({turnOnOff, changeBPM, tapTempo, beat}) => {
    return (
        <div id="buttonsWrapper">
            <ButtonsSwitchoffOverlay />
            <Button id="power" label={<AiOutlinePoweroff />} onClick={()=>turnOnOff()} />
            <Button className="oval" id="mode" label="MODE" onClick={()=>{}}/>
            <Button className="oval" id="select" label="SELECT" onClick={()=>{}}/>
            <Button className="oval" id="decreaseTempo" label={<AiFillCaretDown />} onClick={()=>changeBPM(-1)}/>
            <Button className="oval" id="increaseTempo" label={<AiFillCaretUp />} onClick={()=>changeBPM(1)}/>
            <Button className="circle" id="tapReset" label="TAP/RESET" onClick={()=>tapTempo()}/>
            <Button className="circle" id="playPause" label={
                <>
                <AiFillCaretRight />
                <AiOutlinePause />
                <AiOutlineSound />
                </>
            } onClick={()=>beat()}/>
        </div>
    )
}

export default Buttons;