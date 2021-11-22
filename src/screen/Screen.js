import './screen.css'

const Screen = ({BPM}) => {
    return (
        <div id="screenWrapper">
            {Math.round(BPM)}
        </div>
    )
}

export default Screen;