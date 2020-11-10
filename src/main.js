import Vue from 'vue'
import App from './App.vue'
import "material-icons/iconfont/material-icons.css";
import VueAWN from "vue-awesome-notifications";
import 'vue-awesome-notifications/dist/styles/style.css';
import router from './router';
import store from './store';

Vue.use(VueAWN, {position: "top-right"});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
