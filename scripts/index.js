const {
  generateJSONfromYaml,
  generateMarkdown,
  generateRank,
} = require("./utils");

try {
  const data = generateJSONfromYaml("sponsors");
  generateJSONfromYaml("expenses");

  // 生成排序的 JSON
  generateRank(data);

  generateMarkdown(data);
} catch (e) {
  console.error(e);
}
