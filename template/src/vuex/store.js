import Vuex from 'vuex';
import Vue from 'vue';
 
Vue.use(Vuex);

const state = {
	count: 0
};

const mutations = {
	INCREMENT_COUNT(state) {
		state.count++;
	}
}

export default new Vuex.Store({
	state,
	mutations
});