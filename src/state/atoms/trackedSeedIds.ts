import { localForageAtom } from "../persistence";

const defaultValue: string[] = [];

const trackedSeedIdsState = localForageAtom("trackedSeedIds", defaultValue);

export default trackedSeedIdsState;
