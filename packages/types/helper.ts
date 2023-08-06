/**
 * 枚举为数组
 * @param obj
 * @returns
 */
export function EnumKeys<T extends object>(obj: T) {
  return (Object.keys(obj) as Array<keyof T>).filter(
    value => Number.isNaN(Number(value)) !== false,
  ) // just directly take the non number keys.
}
