import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "leaflet";
import { d as donationService } from "../../../chunks/donation-service.js";
import { l as latestDonation } from "../../../chunks/stores.js";
function addDonationMarker(map, donation) {
  const donationStr = `${donation.title}, ${donation.candidate.firstName}, ${donation.candidate.lastName}`;
  map.addMarker({ lat: donation.lat, lng: donation.lng }, donationStr, "Donations");
  map.moveTo(8, { lat: donation.lat, lng: donation.lng });
}
const DonationMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let map;
  latestDonation.subscribe(async (donation) => {
    if (donation && map) {
      const candidate = await donationService.getCandidate(donation.candidate);
      donation.candidate = candidate;
      addDonationMarker(map, donation);
    }
  });
  return `<div class="${"box"}" id="${"donation-map"}" style="${"height: 75vh"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

${validate_component(DonationMap, "DonationMap").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
