<template>
  <section>
    <wmSearch v-model="searchParams" :config="searchItems"></wmSearch>
    <wmTable :columns="columns" :url="url" :remoteProps="remoteProps" :loading="true"></wmTable>
  </section>
</template>

<script>
import { Input } from 'element-ui'
export default {
  data () {
    return {
      tableData: [
        {
          name: '111',
          id: 1
        }
      ],
      searchParams: {
        act_type: 'xxx'
      },
      searchItems: [
        {
          key: 'act_type',
          class: 'w-100',
          component: Input,
          props: {}
        }
      ],
      remoteProps: {
        dataProps: 'data.list'
      },
      url:
'https://easy-mock.com/mock/5d731c765c01470871ca9548/example/getTableList',
      columns: [
        {
          type: 'selection'
        },
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          prop: 'action',
          label: '操作',
          render: (h, scope) => {
            return (
              <section>
                <el-button on-click={() => this.test(scope)}>aaa</el-button>
                <el-button on-click={() => this.test(scope)}>bbb</el-button>
              </section>
            )
          }
        }
      ]
    }
  },
  methods: {
    test (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
