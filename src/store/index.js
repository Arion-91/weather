import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import {CHECKOUT_FAILURE, CHECKOUT_REQUEST, CHECKOUT_SUCCESS} from "./mutation-types";
import {keyWeather} from "../config";

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		isLoading: false,
		city: 'Омск',
		/**
		 * for request api:
		 * celsius = metric
		 * fahrenheit = imperial
		 */
		tempType: 'metric',
		weather: {
			temp: 0,
			pressure: 0,
			humidity: 0,
			windSpeed: 0,
			rain: 0
		},
	},

	getters: {
		isLoading: state => {
			return state.isLoading;
		},
		getWeather: state => {
			return state.weather;
		},
		getCity: state => {
			return state.city;
		},
		getTempType: state => {
			return state.tempType;
		}
	},

	mutations: {
		[CHECKOUT_REQUEST](state) {
			state.isLoading = true;
		},
		[CHECKOUT_SUCCESS](state, payload) {
			state.weather.pressure = Math.round(payload.main.pressure / 1.33322);
			state.weather.humidity = payload.main.humidity;
			state.weather.windSpeed = payload.wind.speed;
			state.weather.rain = payload.main.humidity;

			state.weather.temp = payload.main.temp;

			console.log(payload);
			state.isLoading = false;
		},
		[CHECKOUT_FAILURE](state) {
			state.isLoading = false;
		},
		changeTempType(state, payload) {
			state.tempType = payload;
		},
		changeCity(state, payload) {
			state.city = payload;
		}
	},

	actions: {
		loadingData({commit, state}) {
			commit(CHECKOUT_REQUEST);

			axios({
				method: "GET",
				url: "https://api.openweathermap.org/data/2.5/weather?&lang=ru&q=" + state.city + "&APPID=" + keyWeather + "&units=" + state.tempType
			})
				.then(res => {
					commit(CHECKOUT_SUCCESS, res.data);
				})
				.catch(err => {
					commit(CHECKOUT_FAILURE, err);
				})
		},

		changeTypeTemp({commit}, type) {
			commit("changeTempType", type);
		},
		changeCity({commit}, city) {
			commit("changeCity", city);
		}
	}
});

export default store;
