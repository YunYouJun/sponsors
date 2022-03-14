/**
 * 枚举为数组
 * @param obj
 * @returns
 */
export function EnumKeys<T>(obj: T) {
  return (Object.keys(obj) as Array<keyof T>).filter(
    value => isNaN(Number(value)) !== false,
  ) // just directly take the non number keys.
}
