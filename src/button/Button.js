import './button.css'

const Button = ({className, label, id, onClick}) => {
    return (
        <div className="buttonWrapper">
            <div className="buttonLabel">{label}</div>
            <div className={`button ${className}`} id={id} onClick={onClick}/>
        </div>
    )
}

export default Button;