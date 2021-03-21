import dayjs from "dayjs";

/**
 * 格式化日期
 * @param val
 * @returns
 */
export function formatDate(val: any) {
  return dayjs(val).format("YYYY-MM-DD");
}
