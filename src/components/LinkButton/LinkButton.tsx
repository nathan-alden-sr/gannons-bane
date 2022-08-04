import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { ButtonTheme } from "../Button/Button";
import "../Button/Button.scss";

export interface LinkButtonProps extends Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, "className"> {
  className?: string;
  theme: ButtonTheme | null;
}

const LinkButton: React.FC<LinkButtonProps> = (props: LinkButtonProps) => {
  return (
    <Link {...props} className={`Button Button_${props.theme ?? "white"} ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default LinkButton;
