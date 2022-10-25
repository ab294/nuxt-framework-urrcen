import { u as useState } from "../server.mjs";
import { unref, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "ohmyfetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "defu";
import "vue-router";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=static-_id_.45710cff.js.map