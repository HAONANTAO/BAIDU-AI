import { ChatCompletion, setEnvVariable } from "@baiducloud/qianfan";
import dotenv from "dotenv";
dotenv.config();

// 从环境变量获取 AK 和 SK
const ak = process.env.QIANFAN_ACCESS_KEY;
const sk = process.env.QIANFAN_SECRET_KEY;

if (!ak || !sk) {
  console.error("请先设置环境变量 QIANFAN_ACCESS_KEY 和 QIANFAN_SECRET_KEY");
  process.exit(1);
}

setEnvVariable("QIANFAN_ACCESS_KEY", ak);
setEnvVariable("QIANFAN_SECRET_KEY", sk);

const client = new ChatCompletion();

async function main() {
  try {
    const resp = await client.chat({
      messages: [
        {
          role: "user",
          content: "请介绍下长城",
        },
      ],
      model: "ERNIE-3.5-8K",
    });
    console.log(resp.result);
  } catch (error) {
    console.error("调用API出错:", error);
  }
}

main();
