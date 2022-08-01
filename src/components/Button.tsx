import React, { PropsWithChildren } from "react";
import "./Button.scss";

export enum ButtonTheme {
  darkGreen = "darkGreen"
}

export interface ButtonProps {
  className?: string;
  theme?: ButtonTheme;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props: PropsWithChildren<ButtonProps>) => {
  return <button className={`Button Button_${props.theme ?? "white"} ${props.className}`}>{props.children}</button>;
};

export default Button;
