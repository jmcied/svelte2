import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "./index2.js";
import { u as user } from "./stores.js";
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  $$unsubscribe_user();
  return `<div class="${"box has-text-centered columns m-2"}"><div class="${"column"}"><img src="${"/homer.png"}" width="${"60"}" alt="${"img"}"></div>
	<div class="${"column"}"><div class="${"title is-5"}">${escape(title)}</div>
		<div class="${"subtitle is-5"}">${escape(subTitle)}</div></div>
	<div class="${"column"}"><i class="${"fas fa-donate fa-3x"}" style="${"color:rgb(95, 96, 173)"}"></i>
		${$user.email ? `<div class="${"is-size-7"}">${escape($user.email)}</div>` : `<div class="${"is-size-7"}">PlaceMark-Svelte 0.6</div>`}</div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"columns is-vcentered "}"><div class="${"column is-half"}">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "Donation Services Inc.",
      subTitle: "Sign up or Log in"
    },
    {},
    {}
  )}</div>
	<div class="${"column is-half"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
