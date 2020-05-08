import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';



Vue.use(Vuex);

export const store = new Vuex.store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules {
       counter 
    }
});


