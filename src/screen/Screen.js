import './screen.css'

const Screen = ({BPM, turnedOn}) => {
    return (
        <div id="screenWrapper">
            {turnedOn?Math.round(BPM):""}
        </div>
    )
}

export default Screen;