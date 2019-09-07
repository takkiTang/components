import wmSearch from './src/index'

wmSearch.install = function (Vue) {
  Vue.component(wmSearch.name, wmSearch)
}

export default wmSearch
