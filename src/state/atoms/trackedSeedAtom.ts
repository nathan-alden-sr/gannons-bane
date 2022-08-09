import { memoize } from "lodash-es";
import { localForageAtom } from "../persistence";

interface TrackedSeed {
  id: string;
}

const trackedSeedAtom = memoize((id: string) => {
  const defaultValue: TrackedSeed = {
    id
  };

  return localForageAtom(`trackedSeed_${id}`, defaultValue);
});

export default trackedSeedAtom;
