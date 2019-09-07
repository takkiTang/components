
<script>
export default {
  name: 'render',
  props: {
    component: {
      type: Object
    },
    props: Object,
    value: {}
  },
  render () {
    let component = this.component
    return <component v-model={this.value} />
  }
}
</script>
