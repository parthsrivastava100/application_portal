// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		loading: false,
	},
	getters: {},
	mutations: {
		load (state, payload) {
			state.loading = payload;
		},
	},
	actions: {}
});