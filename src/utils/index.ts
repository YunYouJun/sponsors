import dayjs from "dayjs";
import { MoneySponsor } from "../types";

export const isProd = process.env.NODE_ENV === 'production'

export * from './name'

/**
 * 格式化日期
 * @param val
 * @returns
 */
export function formatDate(val: any) {
  return dayjs(val).format("YYYY-MM-DD");
}

/**
 * 对 sponsor 进行排序
 * @param sponsors
 */
export function sortSponsor(sponsors: MoneySponsor[]) {
  const json = [
    {
      name: "",
      total: 0,
      children: [] as any[],
    },
  ];
  sponsors.forEach((sponsor) => {
    if (!sponsor.name) sponsor.name = "";
    const contain = json.some((data) => {
      if (data.name === sponsor.name) {
        data.total += sponsor.amount;
        data.children.push(sponsor);
        return true;
      } else {
        return false;
      }
    });
    if (!contain) {
      const info = {
        name: sponsor.name,
        url: sponsor.url,
        total: sponsor.amount,
        children: [sponsor],
      };

      if (sponsor.url) {
        info.url = sponsor.url;
      }

      json.push(info);
    }
  });

  json.sort((a, b) => {
    return b.total - a.total;
  });
  return json;
}
