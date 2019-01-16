import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import UrlShortener from './components/url-shortener';
import TopHits from './components/top-hits';
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: UrlShortener },
  { path: '/top-hits', component: TopHits }
];

const router = new VueRouter({ routes });

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
