export default function isDefined<T>(value: T | undefined | null): value is T {
  const valueAsT = value as T;

  return typeof valueAsT !== "undefined" && valueAsT !== null;
}
