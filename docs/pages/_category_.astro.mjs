import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_gsJH1SME.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CsjG-Lba.mjs';
import { O } from '../chunks/microcms-js-sdk_Bq7TDq0x.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

async function getStaticPaths() {
  const res = await fetch("https://public-api.wordpress.com/wp/v2/sites/wincblogs.wordpress.com/categories");
  const categories = await res.json();
  return categories.map((category) => ({
    params: { category: category.slug }
  }));
}
async function getStaticProps({ params }) {
  const res = await fetch("https://public-api.wordpress.com/wp/v2/sites/wincblogs.wordpress.com/categories");
  const categories = await res.json();
  const currentCategory = categories.find((cat) => cat.slug === params.category);
  if (!currentCategory) {
    return { notFound: true };
  }
  const postsRes = await fetch(`https://public-api.wordpress.com/wp/v2/sites/wincblogs.wordpress.com/posts?categories=${currentCategory.id}`);
  const posts = await postsRes.json();
  return {
    props: {
      currentCategory,
      posts
    }
  };
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  O({
    serviceDomain: "astro-blog-winc",
    apiKey: "xs05PmTpSmeNVgBeZzvv1gGfaWWisMrJ4aQJ"
  });
  const currentCategory = { name: "", slug: "" };
  const posts = [];
  const postTitles = posts.map((post) => post.title.rendered);
  const postIds = posts.map((post) => post.id);
  const postDates = posts.map((post) => post.date);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "wincblog", "data-astro-cid-e6jqf47y": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-e6jqf47y> <p class="guide" data-astro-cid-e6jqf47y><a href="/" data-astro-cid-e6jqf47y>home</a> > <a href="/blog" data-astro-cid-e6jqf47y>blog</a> > <a${addAttribute("/${currentCategory.slug}", "href")} data-astro-cid-e6jqf47y>${currentCategory.name}</a></p> <div class="eye-catch" data-astro-cid-e6jqf47y> <h1 data-astro-cid-e6jqf47y>${currentCategory.name}</h1> <div class="carousel" data-astro-cid-e6jqf47y> <figure data-astro-cid-e6jqf47y> <img src="web/picture1.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture2.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture3.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture4.jpg" alt="" data-astro-cid-e6jqf47y> <img src="web/picture5.jpg" alt="" data-astro-cid-e6jqf47y> </figure> </div> </div> <div class="New_articles" data-astro-cid-e6jqf47y> ${postTitles.length > 0 ? renderTemplate`<ul data-astro-cid-e6jqf47y> ${postTitles.map((postTitle, index) => {
    const year = postDates[index].substring(0, 4);
    const month = postDates[index].substring(5, 7);
    const date = postDates[index].substring(8, 10);
    const postId = postIds[index];
    const contentSnippet = posts[index].content.rendered.substring(0, 50);
    return renderTemplate`<li data-astro-cid-e6jqf47y> <div class="blog" data-astro-cid-e6jqf47y> <div class="picture" data-astro-cid-e6jqf47y> <a${addAttribute(`/posts/${postId}`, "href")} data-astro-cid-e6jqf47y> <img${addAttribute(`https://wincblogs.wordpress.com/wp-content/uploads/${year}/${month}/${postId}.jpg`, "src")}${addAttribute(postTitle, "alt")} class="post-image" data-astro-cid-e6jqf47y> </a> </div> <div class="article_sepalate_line" data-astro-cid-e6jqf47y></div> <div class="post" data-astro-cid-e6jqf47y> <a${addAttribute(`/posts/${postId}`, "href")} class="title" data-astro-cid-e6jqf47y>${postTitle}</a> <p class="date" data-astro-cid-e6jqf47y>投稿日: ${year}年${month}月${date}日</p> <p class="explanation" data-astro-cid-e6jqf47y>${contentSnippet}...</p> <div class="tsuzuki_botton" data-astro-cid-e6jqf47y> <a${addAttribute(`/posts/${postId}`, "href")} class="tsuzuki" data-astro-cid-e6jqf47y>続きを読む</a> </div> </div> </div> </li>`;
  })} </ul>` : renderTemplate`<p data-astro-cid-e6jqf47y>投稿がありません</p>`} </div> <footer data-astro-cid-e6jqf47y> <p data-astro-cid-e6jqf47y>© 2024 Copyright: <span data-astro-cid-e6jqf47y><a data-astro-cid-e6jqf47y>コンピュータ研究会・WINC</a></span></p> </footer> </main> ` })} `;
}, "C:/Users/saeyoshizaki/Desktop/blog_evacuation/src/pages/[category].astro", void 0);
const $$file = "C:/Users/saeyoshizaki/Desktop/blog_evacuation/src/pages/[category].astro";
const $$url = "/wincblog_evacuation/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  getStaticProps,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
