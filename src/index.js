const yaml = require("js-yaml");
const { readFileSync, mkdirSync, writeFileSync } = require("fs");

const name = "sponsors";

let data = "";
try {
  data = yaml.safeLoad(readFileSync(`./src/${name}.yml`, "utf8"));
  try {
    mkdirSync("./dist/");
  } catch ({ code }) {
    if (code !== "EEXIST") return;
  }
  writeFileSync(`./dist/${name}.json`, JSON.stringify(data));
  console.log(`Generated ${name}.json successfully!`);
} catch (e) {
  console.error(e);
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
    : `${sponsor.name}`;
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

writeFileSync("./dist/list.md", sponsors_md, (err) => {
  if (err) throw err;
  console.log(`Generate ${name} list successfully!`);
});
