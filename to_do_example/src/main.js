import Vue from 'vue'
import App from './App.vue'
import router from './router'
import storageMixin from './mixins/storageMixin'

/* 
Register a global mixin.
This way allows all components and views to use the mixin globally.
No need to import it in every file.
*/

Vue.mixin(storageMixin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
