import React, { useState } from "react";
import classNames from "classnames";
import _ from "lodash-es";

type ButtonElementProps = JSX.IntrinsicElements["button"];

export interface ToggleButtonProps extends ButtonElementProps {
  toggled?: boolean | null;
  toggledClassName?: string | null;
  onToggledChange?: (toggled: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = (props: ToggleButtonProps) => {
  function calculateClassNames(isToggled: boolean) {
    return classNames(
      "ToggleButton",
      props.className,
      isToggled && !_.isNil(props.toggledClassName) ? props.toggledClassName : null
    );
  }

  const [toggled, setToggled] = useState(props.toggled === true);
  const [className, setClassName] = useState(calculateClassNames(props.toggled === true));

  function handleClick() {
    const newToggled = !toggled;

    setToggled(newToggled);

    if (!_.isNil(props.toggledClassName)) {
      setClassName(calculateClassNames(newToggled));
    }

    if (!_.isNil(props.onToggledChange)) {
      props.onToggledChange(newToggled);
    }
  }

  return (
    <button className={className} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default ToggleButton;
