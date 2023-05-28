// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import { latestPlace, user } from "../stores";

export const placeService = {
	// baseUrl: "http://localhost:4000",
	baseUrl: "https://hapi-10.onrender.com",

	async login(email, password) {
		try {
			const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.data.success) {
				user.set({
					email: email,
					token: response.data.token
				});
				localStorage.place = JSON.stringify({ email: email, token: response.data.token });
				return true;
			}
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

	async logout() {
		user.set({
			email: "",
			token: ""
		});
		axios.defaults.headers.common["Authorization"] = "";
		localStorage.removeItem("place");
	},

	async signup(firstName, lastName, email, password) {
		try {
			const userDetails = {
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password
			};
			await axios.post(this.baseUrl + "/api/users", userDetails);
			return true;
		} catch (error) {
			return false;
		}
	},

	reload() {
		const placeCredentials = localStorage.place;
		if (placeCredentials) {
			const savedUser = JSON.parse(placeCredentials);
			user.set({
				email: savedUser.email,
				token: savedUser.token
			});
			axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
		}
	},

	async addPlace(place) {
		try {
			const response = await axios.post(this.baseUrl + "/api/countys/" + place.county + "/places", place);
			latestPlace.set(place);
			return response.status == 200;
		} catch (error) {
			return false;
		}
	},

	async getCountys() {
		try {
			const response = await axios.get(this.baseUrl + "/api/countys");
			return response.data;
		} catch (error) {
			return [];
		}
	},

	async getCounty(id) {
		try {
			const response = await axios.get(this.baseUrl + "/api/countys/" + id);
			return response.data;
		} catch (error) {
			return [];
		}
	},

	async getPlaces() {
		try {
			const response = await axios.get(this.baseUrl + "/api/places");
			return response.data;
		} catch (error) {
			return [];
		}
	},

	checkPageRefresh() {
		if (!axios.defaults.headers.common["Authorization"]) {
			const placeCredentials = localStorage.place;
			if (placeCredentials) {
				const savedUser = JSON.parse(placeCredentials);
				user.set({
					email: savedUser.email,
					token: savedUser.token,
					_id: savedUser._id
				});
				axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
			}
		}
	},

	async updatePlace(updatedPlace) {
		const place = await place.findOne({ _id: updatedPlace._id });
		place.title = updatedPlace.title;
		place.img = updatedPlace.img;
		await place.save();
	  },
};
