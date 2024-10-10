import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, e as renderHead, b as renderComponent, f as renderSlot } from './astro/server_gsJH1SME.mjs';
import 'kleur/colors';
import { $ as $$Header } from './header_CfA91Ej_.mjs';
/* empty css                              */

const $$Astro = createAstro("https://saeyoshizaki.github.io/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" rel="stylesheet"><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body style="display: block;"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/saeyoshizaki/Desktop/blog_evacuation/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
