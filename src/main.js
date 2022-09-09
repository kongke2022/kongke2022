import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCoreVideoPlayer from 'vue-core-video-player'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import 'leaflet/dist/leaflet.css'
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import * as L from 'leaflet'
import 'leaflet.pm'
import 'leaflet.pm/dist/leaflet.pm.css'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.L = Vue.prototype.$L = L
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
