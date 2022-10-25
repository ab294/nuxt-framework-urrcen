import { u as useState } from '../server.mjs';
import { unref, useSSRContext } from 'file:///home/projects/nuxt-framework-urrcen/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///home/projects/nuxt-framework-urrcen/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = {
  __name: "static-[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const reloads = useState("static", () => 0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}> Child reloaded: ${ssrInterpolate(unref(reloads))}</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/parent/static-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=static-_id_.45710cff.mjs.map
