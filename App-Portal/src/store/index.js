// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
 
Vue.use(Vuex);

export default new Vuex.Store({
	plugins: [createPersistedState({
        storage: window.sessionStorage,
		reducer: state => ({
			sel_user: state.sel_user,
			dataloaded: state.dataloaded,
			users: state.users,
		})
    })],
	state: {
		search: '',
		loading: false,
		dataloaded: false,
		page: 1,
		sel_user: null,
		users: [],
		checkShow: true,
		isVisible1: false,
		isVisible2: false,
		isVisible3: false,
		isVisible4: false,
		isVisible5: false,
		isVisible6: false,
		isVisible7: false,
		isVisible8: false,
		isVisible9: false,
		isVisible10: false,
		checkboxes: {
            y2019: false,
			y2018: false,
			y2017: false
        }
	},
	getters: {},
	mutations: {
		load (state, payload) {
			state.loading = payload;
		},
		set_users (state, payload) {
			state.users.length = 0;
			for(var x in payload){
				state.users.push(payload[x]);
			}
			state.dataloaded = true;
		},
		set_dataloaded (state, payload) {
			state.dataloaded = payload;
		},
		curr_user (state, payload) {
			state.sel_user = payload;
		},
		searchQuery (state, payload) {
			state.search = payload;
		},
		reset_page (state) {
			state.page = 1;
		},
		toggle_checkShow (state) {
			state.checkShow = !state.checkShow;
		},
	},
	actions: {}
});