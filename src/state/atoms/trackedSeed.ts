import { memoize } from "lodash-es";
import { localForageAtom } from "../persistence";

interface TrackedSeed {
  id: string;
}

const trackedSeedState = memoize((id: string) => {
  const defaultTrackedSeed: TrackedSeed = {
    id
  };

  return localForageAtom(`trackedSeed_${id}`, defaultTrackedSeed);
});

export default trackedSeedState;
