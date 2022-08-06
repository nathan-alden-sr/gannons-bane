import { customAlphabet, nanoid } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import { isNil } from "lodash-es";

export function generateId() {
  return nanoid();
}

export const entityIdLength = 10;
export const entityIdRegExp = new RegExp(`^[a-z0-9]{${entityIdLength}}$`, "iu");

const entityIdAlphabet = customAlphabet(alphanumeric, entityIdLength);

export function generateEntityId() {
  return entityIdAlphabet();
}

export function isValidEntityId(id: string | undefined | null, allowUndefined: boolean = false) {
  const isIdDefined = !isNil(id);

  return (!isIdDefined && allowUndefined) || (isIdDefined && entityIdRegExp.test(id));
}
