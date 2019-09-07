import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'

import wmTable from '@/components/wm-table'
import wmSearch from '@/components/wm-search'
import wmForm from '@/components/wm-form'

Vue.use(wmTable)
Vue.use(wmForm)
Vue.use(wmSearch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
