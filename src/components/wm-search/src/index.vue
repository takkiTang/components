<template>
  <section>
    <template v-for="(searchItem,index) in searchItems">
      <component
        v-if="searchItem._ifRender"
        v-model="searchData[searchItem.key]"
        :is="searchItem.tag"
        v-bind="searchItem.props || {}"
        v-on="searchItem.events"
        :key="`${searchItem.key}_${index}`"
        @change="handelChange"
      >
      </component>
    </template>
  </section>
</template>

<script>
import ElementMapping from '../ElementMapping.js'
import render from './render'
export default {
  name: 'wmSearch',
  components: { render },
  model: {
    props: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Object
    },
    config: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      ElementMapping,
      searchData: {}
    }
  },
  watch: {
    value: {
      handler () {
        this.searchData = this.value
      },
      immediate: true
    }
  },
  computed: {
    searchItems () {
      return (this.config || []).map(item =>
        this.computeFormItem(item, this.searchData)
      )
    }
  },
  methods: {
    handelChange () {
      this.$emit('change', this.searchData)
    },
    computeFormItem (config, form) {
      const item = { ...config }
      if (item.type) {
        let type = item.type || 'text'

        let def = this.ElementMapping[type]
        item.tag = def.component
        if (def.children) {
          item.childrenTag = def.children.component
        }
        item.props = Object.assign({}, def.props, item.props)
      } else {
        item.tag = item.component
      }
      if (this.isFunction(item.getProps)) {
        Object.assign(item.props, item.getProps(form))
      }

      item._ifRender = this.isFunction(item.ifRender)
        ? !!item.ifRender(form)
        : true

      if (!item._ifRender) {
        delete form[item.key]
      }

      return item
    },
    isFunction (fn) {
      return typeof fn === 'function'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
