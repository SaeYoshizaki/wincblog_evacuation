import { O } from './microcms-js-sdk_Bq7TDq0x.mjs';

const client = O({
  serviceDomain: "astro-blog-winc",
  apiKey: "xs05PmTpSmeNVgBeZzvv1gGfaWWisMrJ4aQJ"
});
const getUsers = async (queries) => {
  return await client.get({
    endpoint: "astro-blog-winc",
    queries
  });
};

export { getUsers as g };
