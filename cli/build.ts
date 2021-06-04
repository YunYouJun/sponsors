import { generateJSONfromYaml, generateMarkdown, generateRank } from "./utils";
import { Sponsor } from "../src/types/index";

try {
  const data = generateJSONfromYaml("sponsors") as Sponsor[];
  // filter
  data.filter((item) => {
    if (!item.method === "其他") {
      return item.amount >= 5;
    } else {
      return true;
    }
  });

  generateJSONfromYaml("expenses");

  // 生成排序的 JSON
  generateRank(data);

  generateMarkdown(data);
} catch (e) {
  console.error(e);
}
