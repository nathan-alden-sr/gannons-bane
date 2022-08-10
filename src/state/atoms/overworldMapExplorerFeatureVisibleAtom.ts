import { memoize } from "lodash-es";
import { localForageAtom } from "../persistence";
import { JsonOverworldFeatureType } from "../../resources/jsonOverworldFeaturesData";

const overworldMapExplorerFeatureVisibleAtom = memoize((featureType: JsonOverworldFeatureType) => {
  const defaultValue = true;

  return localForageAtom(`overworldMapExplorerFeatureVisible_${featureType}`, defaultValue);
});

export default overworldMapExplorerFeatureVisibleAtom;
