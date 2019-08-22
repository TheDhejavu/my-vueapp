import {
    loginUser,
    signUpUser,
    getCurrentUser
 } from './api';

const defaultState = {
  currentUser: {},
  feedback: {
    error: false,
    message: ""
  }
};

const actions = {
  "LOGIN": (context, payload) => {
    loginUser( payload)
      .then((response) => {
        context.commit('SET_USER', response);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
  "SIGNUP": (context, payload) => {
    signUpUser( payload )
      .then((response) => {
          // console.log( response)
        context.commit('SET_CURRENT_USER', response);
        const feedback = {
          error: false,
          message: "wooooow!!! you have successfully registered",
          response
        }
        context.commit('SET_AUTH_FEEDBACK', feedback);
      })
      .catch((error) => {
        // eslint-disable-next-line
        error = {
            error:true,
            ...error
        }
        context.commit('SET_AUTH_FEEDBACK', error);
      });
  },
};

const mutations = {
  "SET_CURRENT_USER": (state, user) => {
    state.currentUser = user || getCurrentUser();
  },
  "SET_AUTH_FEEDBACK": (state, feedback) => {
    state.feedback = feedback;
  },
};

const getters = {
    currentUser: state => state.currentUser,
    authFeedback: state => state.feedback,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};