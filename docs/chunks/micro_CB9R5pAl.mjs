import { O } from './microcms-js-sdk_Bq7TDq0x.mjs';

const client = O({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  // サービスドメインを環境変数から取得
  apiKey: process.env.MICROCMS_API_KEY
  // APIキーを環境変数から取得
});
const getUsers = async (queries) => {
  return await client.get({
    endpoint: "astro-blog-winc",
    queries
  });
};

export { getUsers as g };
