import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import authModule from './modules/auth/index.js';

const store =  createStore({
  modules: {
    auth: authModule
  },
  plugins: [createPersistedState({
    paths: ['auth']
  })],
    });
 
export default store;