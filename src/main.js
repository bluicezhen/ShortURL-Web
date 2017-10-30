import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import pageHome from './page/Home.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: pageHome
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
