import { ReactNode, useEffect, useState } from "react";

interface DelayProps {
  delayInMilliseconds?: number | null;
  children?: ReactNode;
}

const Delay: React.FC<DelayProps> = (props: DelayProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), props.delayInMilliseconds ?? 0);

    return () => clearTimeout(timeout);
  }, [props.delayInMilliseconds]);

  return <>{isVisible && props.children}</>;
};

export default Delay;
