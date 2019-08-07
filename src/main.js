import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VeeValidate, { Validator} from 'vee-validate';
import { dictionary } from "./helpers/vee-validate"

Validator.localize(dictionary);
Vue.use(VeeValidate);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
