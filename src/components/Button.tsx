import "./Button.scss";

export enum ButtonTheme {
  darkGreen = "darkGreen"
}

type ButtonElement = JSX.IntrinsicElements["button"];

export interface ButtonProps extends ButtonElement {
  theme?: ButtonTheme;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button {...props} className={`Button Button_${props.theme ?? "white"} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
