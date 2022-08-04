import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import { isNil } from "lodash-es";

export const idLength = 10;
export const idRegExp = new RegExp(`^[a-z0-9]{${idLength}}$`, "iu");

const alphabet = customAlphabet(alphanumeric, idLength);

export function generateId() {
  return alphabet();
}

export function isValidId(id: string | undefined | null, allowUndefined: boolean = false) {
  const isIdDefined = !isNil(id);

  return (!isIdDefined && allowUndefined) || (isIdDefined && idRegExp.test(id));
}
