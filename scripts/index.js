const yaml = require("js-yaml");
const fs = require("fs");

const name = "sponsors";

let data = "";
try {
  data = yaml.safeLoad(fs.readFileSync(`./data/${name}.yml`, "utf8"));
  try {
    fs.mkdirSync("./dist/");
  } catch ({ code }) {
    if (code !== "EEXIST") return;
  }
  data.forEach((sponsor) => {
    sponsor.amount = sponsor.amount;
  });
  fs.writeFileSync(`./dist/${name}.json`, JSON.stringify(data));
  console.log(`Generated ${name}.json successfully!`);

  // 生成排序的 JSON
  const rank = generateRank(data);
  fs.writeFileSync("./dist/rank.json", JSON.stringify(rank));
  console.log(`Generated rank.json successfully!`);
} catch (e) {
  console.error(e);
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
  return json;
}

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

fs.writeFileSync("./dist/list.md", sponsors_md, (err) => {
  if (err) throw err;
  console.log(`Generate ${name} list successfully!`);
});
