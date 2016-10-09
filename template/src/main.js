// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './router'

/* eslint-disable no-new */
Vue.use(VueRouter);
const router = new VueRouter();
configRouter(router);

router.start(Vue.extend(App), '#app');