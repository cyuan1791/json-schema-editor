import Vue from 'vue'
import accounting from 'accounting'
import pluralize from 'pluralize'
import Shop from './components/shop/Shop'
import store from './store'
import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'

Vue.use(VueResource)
Vue.use(VModal, { dynamic: true })

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

new Vue({
  el: window.vueblogid,
  store,
  created () {
    this.$store.dispatch('initProduct')
    this.$http.get(window.cmsnowdata)
      .then(response => {
        return response.json()
      }).then(
      data => {
        this.$store.commit('INIT_PRODUCT', data.data)
        console.log(data.data)
      })
  },
  render: h => h(Shop)
})
