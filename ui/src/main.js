import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
