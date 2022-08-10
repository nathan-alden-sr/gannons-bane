import localForage from "localforage";
import { atom, AtomEffect, DefaultValue, Loadable, RecoilValue, WrappedValue } from "recoil";
import _ from "lodash";

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
  const effect: AtomEffect<T> = ({ setSelf, onSet }) => {
    setSelf(localForage.getItem<T>(key).then((itemValue) => (!_.isNil(itemValue) ? itemValue : new DefaultValue())));

    onSet((newValue, _oldValue, isReset) => {
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
