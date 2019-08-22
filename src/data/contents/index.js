import { fetchContents } from './api';

const defaultState = {
  contents: [],
};

const actions = {
  getContents: (context) => {
    fetchContents
      .then((response) => {
        context.commit('GET_CONTENTS', response);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};

const mutations = {
  "GET_CONTENTS": (state, contents) => {
    state.contents = contents;
  },
};

const getters = {
  contents: state => state.contents,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};