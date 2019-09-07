<template>
  <section>
    <el-input v-bind="$attrs" ></el-input>
  </section>
</template>

<script>
export default {
  mounted () {
    console.log(this.$attrs)
  }

}
</script>

<style>

</style>
