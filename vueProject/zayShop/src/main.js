import Vue from 'vue'
import App from './App.vue'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './routers'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.use(Routes)
// import { create } from 'core-js/fn/object'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
