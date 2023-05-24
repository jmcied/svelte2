import { w as writable } from "./index.js";
const user = writable({
  email: "",
  token: ""
});
const latestDonation = writable(null);
export {
  latestDonation as l,
  user as u
};
