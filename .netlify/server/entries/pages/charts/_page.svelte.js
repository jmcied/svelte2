import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { B as Base, D as DonationsByCandidate } from "../../../chunks/DonationsByCandidate.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const DonationsByMethod = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalByDifficulty = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [{ values: [0, 0, 0] }]
  };
  return `<h1 class="${"title is-4"}">By Difficulty</h1>
${validate_component(Base, "Chart").$$render($$result, { data: totalByDifficulty, type: "pie" }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="${"columns"}"><div class="${"column box has-text-centered"}"><h1 class="${"title is-4"}">Donations to date</h1>
        ${validate_component(DonationsByMethod, "DonationsByDifficulty").$$render($$result, {}, {}, {})}</div>
    <div class="${"column has-text-centered"}">${validate_component(DonationsByCandidate, "DonationsByCandidate").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
