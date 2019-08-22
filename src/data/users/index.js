import { fetchUser } from './api';

const defaultState = {
  user: {},
};

const actions = {
  "GET_USER": (context) => {
    fetchUser
      .then((response) => {
        context.commit('SET_USER', response);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};

const mutations = {
  "SET_USER": (state, user) => {
    state.user = user;
  },
};

const getters = {
  user: state => state.user,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};