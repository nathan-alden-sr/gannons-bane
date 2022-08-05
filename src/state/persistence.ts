import localForage from "localforage";
import { atom, AtomEffect, Loadable, RecoilValue, WrappedValue } from "recoil";
import { isNil } from "lodash-es";

// Based on sample code at https://recoiljs.org/docs/guides/atom-effects#asynchronous-setself

// Compatible types listed at https://localforage.github.io/localForage/#data-api-setitem
type TItem =
  | any[]
  | ArrayBuffer
  | Blob
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Number
  | Object
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array
  | String;

export function localForageEffect<T extends TItem>(key: string) {
  const effect: AtomEffect<T> = ({ trigger, setSelf, onSet }) => {
    const persistedValue = async () => {
      const value = await localForage.getItem<T>(key);

      if (!isNil(value)) {
        setSelf(value);
      }
    };

    if (trigger === "get") {
      persistedValue();
    }

    onSet((newValue, _, isReset) => {
      if (isReset) {
        localForage.removeItem(key);
      } else {
        localForage.setItem(key, newValue);
      }
    });
  };

  return effect;
}

export function localForageAtom<T>(key: string, defaultValue?: RecoilValue<T> | Promise<T> | Loadable<T> | WrappedValue<T> | T) {
  const effects = [localForageEffect<T>(key)];

  return atom(typeof defaultValue === "undefined" ? { key, effects } : { key, default: defaultValue, effects });
}
