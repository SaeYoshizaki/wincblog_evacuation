import { createClient, type MicroCMSQueries  } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,  // サービスドメインを環境変数から取得
  apiKey: import.meta.env.MICROCMS_API_KEY,               // APIキーを環境変数から取得
});


export const getUsers = async (queries: MicroCMSQueries) => {
    return await client.get({
        endpoint: "astro-blog-winc",
        queries
    })
};