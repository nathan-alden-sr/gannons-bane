import { memoize } from "lodash-es";
import { localForageAtom } from "../persistence";
import { JsonOverworldFeatureType } from "../../resources/jsonOverworldFeaturesData";

interface OverworldMapExplorerFeature {
  featureType: JsonOverworldFeatureType;
  visible: boolean;
}

const overworldMapExplorerFeatureAtom = memoize((featureType: JsonOverworldFeatureType) => {
  const defaultValue: OverworldMapExplorerFeature = {
    featureType,
    visible: true
  };

  return localForageAtom(`overworldMapExplorerFeature_${featureType}`, defaultValue);
});

export default overworldMapExplorerFeatureAtom;
