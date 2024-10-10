import { O } from './microcms-js-sdk_Bq7TDq0x.mjs';

const client = O({
  serviceDomain: "astro-blog-winc",
  // サービスドメインを環境変数から取得
  apiKey: "xs05PmTpSmeNVgBeZzvv1gGfaWWisMrJ4aQJ"
  // APIキーを環境変数から取得
});
const getUsers = async (queries) => {
  return await client.get({
    endpoint: "astro-blog-winc",
    queries
  });
};

export { getUsers as g };
