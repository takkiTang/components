<template>
  <section>
    <wmForm v-model="form" :options="options"></wmForm>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      options: [
        {
          label: '活动类型',
          key: 'act_type'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
