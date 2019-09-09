
<script>
export default {
  name: 'render',
  data () {
    return {
      temp: null
    }
  },
  model: {
    props: 'value',
    event: 'change'
  },
  watch: {
    value: {
      handler () {
        this.temp = this.value
      },
      immediate: true
    }
  },
  props: {
    component: {
      type: Object
    },
    props: Object,
    value: {}
  },
  render () {
    let component = this.component
    return <component v-model={this.temp} onChange={() => this.$emit('change', this.temp)} />
  }
}
</script>
