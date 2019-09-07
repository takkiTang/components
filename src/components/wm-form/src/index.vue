<template>
  <section>
    <el-form :model="formModel">
      <el-form-item
        v-for="(input, i) in options"
        :key="input.key + '_' + i"
        :label="input.title"
      >
        <component :is="input.tag" v-model="form[input.key]" v-bind="input.props || {}" />
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'wmForm',
  porps: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
