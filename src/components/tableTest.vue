<template>
  <section>
    测试一下值：{{searchParams}}
    <wmSearch v-model="searchParams" :config="searchConfig"></wmSearch>
    <wmTable
      ref="wmTable"
      :data="tableData"
      :columns="columns"
      :url="'https://www.fastmock.site/mock/7855ce017b3823ac98792f377db1828d/test/getTableList'"
      :remoteProps="remoteProps"
      :searchParams="searchParams"
      :paginationProps="paginationProps"
    >
      <template v-slot:slot="{row}">
        <span>测试值：{{row['slot']}}</span>
      </template>
    </wmTable>
  </section>
</template>

<script>
export default {
  data () {
    return {
      /**
       * 获取远程key可选值：
       * dataProp
       * currentPageProp
       * totalProp
       */
      remoteProps: {
        dataProps: 'data.list'
      },
      /**
       *  分页入参key可选值：
       * pageSizeParamProp
       * currentPageParamProp
       */
      paginationProps: {},
      //  搜索入参
      searchParams: {
        act_type: ''
      },
      tableData: [
        {
          name: '111',
          id: 1
        }
      ],
      // 搜索配置
      searchConfig: [
        {
          type: 'text',
          key: 'act_type',
          props: {
            class: 'w-300',
            placeholder: '测试一下属性'
          },
          events: {
            change: () => {
              console.log('测试一下事件')
              this.$refs['wmTable'].getTableData()
            }
          }
        }
      ],
      // 表格配置
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
          prop: 'slot',
          label: 'slot',
          type: 'slot'
        },
        {
          prop: 'action',
          label: '操作',
          render: (h, scope) => {
            return (
              <section>
                <el-button on-click={() => this.test(scope)}>
                  测试render
                </el-button>
              </section>
            )
          }
        }
      ]
    }
  },
  methods: {
    test (data) {
      console.log('测试render事件')
      console.log('测试值', data)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
