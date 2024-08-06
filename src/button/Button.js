import "./button.css";
import { playSound } from "../utils/audioUtils";

const Button = ({ className, label, id, onClick }) => {
  return (
    <div className="buttonWrapper">
      <div className="buttonLabel">{label}</div>
      <div
        className={`button ${className}`}
        id={id}
        onMouseDown={() => {
          onClick();
          playSound();
        }}
      />
    </div>
  );
};

export default Button;
