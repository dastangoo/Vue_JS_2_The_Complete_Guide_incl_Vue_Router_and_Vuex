import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return stattte.counter * 2 ;
        }
    }
});


