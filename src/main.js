import Vue from 'vue';
import firebase from "firebase/app";

import App from './App.vue'
import router from "./router";
import Toaster from "./components/Toaster"
import VeeValidate, { Validator} from 'vee-validate';
import { dictionary } from "./helpers/vee-validate"
import firebaseConfig from "./config/firebase";
// import our plugin
import Dialog from './components/dialogs/Dialog';
import ProgressBar from "./components/progress";
import { store } from './store'
// use it
Vue.use(Dialog)
firebase.initializeApp(firebaseConfig);

Validator.localize(dictionary);

Vue.use(VeeValidate);

Vue.use(Toaster)

Vue.use(ProgressBar)

Vue.config.productionTip = false

new Vue({
  router,
   store,
  render: h => h(App),
}).$mount('#app')
