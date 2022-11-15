import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import babelPolyfill from 'babel-polyfill'
import VueRouter  from 'vue-router'
import Routes from './router/routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

//filters
Vue.filter('snippet', function(value){
  return value + '...'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
