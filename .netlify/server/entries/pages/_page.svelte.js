import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { H as Header } from "../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="${"columns is-vcentered content"}"><div class="${"column has-text-centered"}"><img width="${"300"}" src="${"/homer.png"}" alt="${"homer"}"></div>
	<div class="${"column"}"><h1 class="${"title"}">Help Me Run Springfield</h1>
		<p>Donate what you can now - No Bitcoins accepted!</p></div></div>`;
});
export {
  Page as default
};
