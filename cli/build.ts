import { generateJSONfromYaml, generateMarkdown, generateRank } from "./utils";
import { Sponsor, MoneySponsor } from "../src/types/index";

try {
  let data = generateJSONfromYaml("sponsors") as Sponsor[];
  // filter
  data = data.filter((item) => {
    // todo: other sponsors
    if (item.method === "其他") {
      // return true;
      return false;
    } else {
      return item.amount >= 5;
    }
  });

  generateJSONfromYaml("expenses");

  // 生成排序的 JSON
  generateRank(data as MoneySponsor[]);

  generateMarkdown(data as MoneySponsor[]);
} catch (e) {
  console.error(e);
}
