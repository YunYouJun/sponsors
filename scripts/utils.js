const fs = require("fs");
const yaml = require("js-yaml");

const { Logger } = require("@yunyoujun/logger");
const logger = new Logger();

/**
 * 从 yaml 文件生成 json
 * @param {string} name
 */
function generateJSONfromYaml(name) {
  const data = yaml.load(fs.readFileSync(`./data/${name}.yml`, "utf8"));
  try {
    fs.mkdirSync("./dist/");
  } catch ({ code }) {
    if (code !== "EEXIST") return;
  }
  fs.writeFileSync(`./dist/${name}.json`, JSON.stringify(data));
  logger.success(`Generated ${name}.json successfully!`);
  return data;
}

/**
 * 生成排序的 JSON
 * @param {*} json
 */
function generateRank(sponsors) {
  const json = [
    {
      name: "",
      avatar: "https://vercel.com/api/www/avatar/?u=evilrabbit&s=240",
      total: 0,
      children: [],
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
      json.push({
        name: sponsor.name,
        url: sponsor.url,
        total: sponsor.amount,
        children: [sponsor],
      });
    }
  });

  json.sort((a, b) => {
    return b.total - a.total;
  });

  const filename = "rank.json";
  fs.writeFileSync(`./dist/${filename}`, JSON.stringify(json));
  logger.success(`Generated ${filename} successfully!`);
  return json;
}

/**
 * 生成 markdown
 * @param {*} data
 */
function generateMarkdown(data, name = "sponsors") {
  // generate sponsors list
  let sponsors_md = `---
title: 赞助者名单
---

## Sponsors (${data.length})

|老板|方式|金额|日期|备注|
|---|---|---|---|---|
`;

  for (let i = 0; i < data.length; i++) {
    const sponsor = data[i];
    const boss = sponsor.url
      ? `[${sponsor.name}](${sponsor.url})`
      : `${sponsor.name || "好心人"}`;
    const amount =
      sponsor.amount >= 50
        ? `**${sponsor.amount.toFixed(2)}**`
        : `${sponsor.amount.toFixed(2)}`;
    const sponsor_md = `|${boss}|${
      sponsor.method
    }|${amount}|${sponsor.date.toLocaleDateString("zh-CN")}|${
      sponsor.memo || "冰阔落"
    }|\n`;
    sponsors_md += sponsor_md;
  }

  const filename = "list.md";
  fs.writeFileSync(`./dist/${filename}`, sponsors_md);
  logger.success(`Generate ${filename} successfully!`);
}

module.exports = {
  generateJSONfromYaml,
  generateMarkdown,
  generateRank,
};
