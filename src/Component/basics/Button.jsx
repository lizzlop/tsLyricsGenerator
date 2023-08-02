import "../../styles/index.css";

export const Button = ({
  onButtonClick,
  style,
  disabled = true,
  type = "button",
  children,
}) => {
  const styleButton = disabled ? style : {};

  return (
    <div>
      <button
        className="button"
        style={styleButton}
        disabled={!disabled}
        type={type}
        onClick={onButtonClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
