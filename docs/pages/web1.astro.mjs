import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bqsq_RjE.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Web1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="carousel" data-astro-cid-kfctdxqw> <figure data-astro-cid-kfctdxqw> <img src="/web/picture1.jpg" alt="" data-astro-cid-kfctdxqw> <img src="/web/picture2.jpg" alt="" data-astro-cid-kfctdxqw> <img src="/web/picture3.jpg" alt="" data-astro-cid-kfctdxqw> <img src="/web/picture4.jpg" alt="" data-astro-cid-kfctdxqw> <img src="/web/picture5.jpg" alt="" data-astro-cid-kfctdxqw> </figure> </div>   `;
}, "C:/Users/saeyoshizaki/Desktop/blog_evacuation/src/pages/web1.astro", void 0);

const $$file = "C:/Users/saeyoshizaki/Desktop/blog_evacuation/src/pages/web1.astro";
const $$url = "/wincblog-wordpress/web1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Web1,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
