import React, { useState } from "react";
import classNames from "classnames";
import { isNil } from "lodash-es";

type ButtonElementProps = JSX.IntrinsicElements["button"];

export interface ToggleButtonProps extends ButtonElementProps {
  defaultToggled?: boolean | null;
  toggledClassName?: string | null;
  onToggledChange?: (toggled: boolean) => void;
}

export interface ToggleButtonState {
  toggled: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = (props: ToggleButtonProps) => {
  const [toggled, setToggled] = useState(props.defaultToggled ?? false);

  const buttonClassNames = classNames(
    "ToggleButton",
    props.className,
    toggled && !isNil(props.toggledClassName) ? props.toggledClassName : null
  );

  function onClick() {
    const newToggled = !toggled;

    setToggled(newToggled);

    if (!isNil(props.onToggledChange)) {
      props.onToggledChange(newToggled);
    }
  }

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default ToggleButton;
