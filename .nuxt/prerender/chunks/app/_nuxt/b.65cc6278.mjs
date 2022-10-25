import { ssrRenderAttrs } from 'file:///home/projects/nuxt-framework-urrcen/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file:///home/projects/nuxt-framework-urrcen/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/ohmyfetch/dist/node.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/hookable/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/unctx/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/ufo/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/h3/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/defu/dist/defu.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/vue-router/dist/vue-router.node.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/destr/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/scule/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/ohash/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/unstorage/dist/index.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///home/projects/nuxt-framework-urrcen/node_modules/radix3/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Parent/b </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/parent/b.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const b = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { b as default };
//# sourceMappingURL=b.65cc6278.mjs.map