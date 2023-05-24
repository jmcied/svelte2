import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "leaflet";
import { D as DonationsByCandidate } from "../../../chunks/DonationsByCandidate.js";
const Coordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lat = 0 } = $$props;
  let { lng = 0 } = $$props;
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lng === void 0 && $$bindings.lng && lng !== void 0)
    $$bindings.lng(lng);
  return `<div class="${"box field is-horizontal"}"><div class="${"field-label is-normal"}"><label for="${"lng"}" class="${"label"}">Lat</label></div>
	<div class="${"field-body"}"><div class="${"field"}"><p class="${"control is-expanded"}"><input id="${"lng"}" class="${"input"}" type="${"float"}"${add_attribute("value", lat, 0)}></p></div>
		<div class="${"field-label is-normal"}"><label for="${"lat"}" class="${"label"}">Lng</label></div>
		<div class="${"field"}"><p class="${"control is-expanded "}"><input id="${"lat"}" class="${"input"}" type="${"float"}"${add_attribute("value", lng, 0)}></p></div></div></div>`;
});
const DonateForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title = "";
  let lat = 52.160858;
  let lng = -7.15242;
  let candidateList = [];
  let paymentMethods = ["Easy", "Medium", "Hard"];
  let selectedMethod = "";
  let message = "Please donate";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form><div class="${"field"}"><label class="${"label"}" for="${"title"}">Enter title</label>
		<input class="${"input"}" placeholder="${"title"}" name="${"title"}" type="${"text"}"${add_attribute("value", title, 0)}></div>
	<div class="${"field"}"><div class="${"control"}">${each(paymentMethods, (method) => {
      return `<input class="${"radio"}" type="${"radio"}"${add_attribute("value", method, 0)}${method === selectedMethod ? add_attribute("checked", true, 1) : ""}> ${escape(method)}`;
    })}</div></div>
	<div class="${"field"}"><div class="${"select"}"><select>${each(candidateList, (candidate) => {
      return `<option value="${escape(candidate.lastName, true) + "," + escape(candidate.firstName, true)}">${escape(candidate.lastName)},${escape(candidate.firstName)}</option>`;
    })}</select></div></div>
	<div class="${"field"}"><div class="${"control"}"><button class="${"button is-link is-light"}">Donate</button></div></div>
	<div class="${"box"}">${escape(message)}</div>
	${validate_component(Coordinates, "Coordinates").$$render(
      $$result,
      { lat, lng },
      {
        lat: ($$value) => {
          lat = $$value;
          $$settled = false;
        },
        lng: ($$value) => {
          lng = $$value;
          $$settled = false;
        }
      },
      {}
    )}</form>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="${"columns is-vcentered"}"><div class="${"column has-text-centered"}">
		${validate_component(DonationsByCandidate, "DonationsByCandidate").$$render($$result, {}, {}, {})}</div>
	<div class="${"column box has-text-centered"}"><h1 class="${"title is-4"}">Give Generously!</h1>
		${validate_component(DonateForm, "DonateForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
