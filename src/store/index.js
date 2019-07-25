import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {CHECKOUT_FAILURE, CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from "./mutation-types";
import {keyWeather} from "../config";

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		isLoading: false,
		weather: {}
	},

	getters: {
		isLoading: state => {
			return state.isLoading;
		},
		getUser: state => {
			return state.user;
		},
	},

	mutations: {
		[CHECKOUT_REQUEST](state) {
			state.isLoading = true;
		},
		[CHECKOUT_SUCCESS](state, payload) {
			state.weather = payload;
			console.log(payload);
		},
		[CHECKOUT_FAILURE](state) {
			state.isLoading = false;
		}
	},

	actions: {
		loadingData({commit}) {
			commit(CHECKOUT_REQUEST);
			axios({
				method: "GET",
				url: "https://api.openweathermap.org/data/2.5/weather?lang=ru&q=Omsk&APPID=" + keyWeather
			})
				.then(res => {
					commit(CHECKOUT_SUCCESS, res.data);
				})
				.catch(err => {
					commit(CHECKOUT_FAILURE, err);
				})
		}
	}
});

export default store;
