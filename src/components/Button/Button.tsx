import React from "react";
import "./Button.scss";

export const enum ButtonTheme {
  green = "green"
}

type ButtonElementProps = JSX.IntrinsicElements["button"];

export interface ButtonProps extends ButtonElementProps {
  theme: ButtonTheme | null;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button {...props} className={`Button Button_${props.theme ?? "white"} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default React.memo(Button);
