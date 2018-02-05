import Vue from 'vue'
import App from './App.vue'

//require global variable by expose loader
require('expose-loader?CONSTANT!./component/constant/constant.js');

new Vue({
  el: '#app',
  render: h => h(App)
})