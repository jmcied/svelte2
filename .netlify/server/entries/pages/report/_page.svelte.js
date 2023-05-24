import { c as create_ssr_component, f as each, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const DonationList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let donationList = [];
  return `<table class="${"table is-fullwidth"}"><thead><th>Title</th>
		<th>Difficulty</th>
		<th>Candidate</th>
		<th>Donor</th></thead>
	<tbody>${each(donationList, (donation) => {
    return `<tr><td>${escape(donation.title)}</td>
				<td>${escape(donation.difficulty)}</td>
				<td>${escape(donation.candidate.lastName)}, ${escape(donation.candidate.firstName)}</td>
				<td>${escape(donation.donor.lastName)}, ${escape(donation.donor.firstName)}</td>
			</tr>`;
  })}</tbody></table>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="${"columns"}"><div class="${"column has-text-centered"}"><img alt="${"Homer"}" src="${"/homer4.jpeg"}" width="${"300"}"></div>
	<div class="${"column box has-text-centered"}"><h1 class="${"title is-4"}">Donations to date</h1>
		${validate_component(DonationList, "DonationList").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
