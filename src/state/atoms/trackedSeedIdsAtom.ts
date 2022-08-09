import { localForageAtom } from "../persistence";

const defaultValue: string[] = [];

const trackedSeedIdsAtom = localForageAtom("trackedSeedIds", defaultValue);

export default trackedSeedIdsAtom;
