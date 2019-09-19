<template>
  <section>
    <el-table :data="tableData" v-on="$listeners" v-bind="tableAttrs" ref="table" v-loading="loading && isLoading">
      <template v-for="(column,index) in columns">
        <el-table-column v-if="column.type==='slot'" :key="index" v-bind="column">
          <template slot-scope="scope">
            <slot
              :row="scope.row"
              :coloumn="scope.coloumn"
              :$index="scope.$index"
              :name="column.prop"
            ></slot>
          </template>
        </el-table-column>
        <el-table-column v-else-if="column.render" :key="index" v-bind="column">
          <template slot-scope="scope">
            <render :render="column.render" :row="scope.row" :index="index" :column="column"></render>
          </template>
        </el-table-column>
        <el-table-column :key="index" v-else-if="column.filter" v-bind="column">
          <template slot-scope="{row}">
            <span>{{ Vue.filter(column.filter)(row[column.prop]) }}</span>
          </template>
        </el-table-column>
        <el-table-column v-bind="column" :key="index" v-else></el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="showPagination"
      v-bind="pageAttrs"
      :total="total"
      :current-page.sync="currentPage"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </section>
</template>

<script>
import render from './render'

const DEFAULT_TABLE_OPTIONS = {
  stripe: true
}
const DEFAULT_PAGE_OPTIONS = {
  layout: 'total, prev, pager, next, jumper',
  pageSize: 20,
  totalProps: 'total',
  currentPageProps: 'currentPage',
  pageSizeProps: 'pageSize'
}
const DEFAULT_REMOTE_PROPS = {
  dataProps: 'data',
  currentPageProps: 'currentPage',
  totalProps: 'total'
}
const DEFAULT_PAGINATION_PROPS = {
  pageSizeParamProp: 'pageSize',
  currentPageParamProp: 'currentPage'
}

export default {
  name: 'wmTable',
  components: { render },
  props: {
    type: {
      type: String,
      default: 'remote'
    },
    data: {
      type: Array,
      default: () => []
    },
    url: {
      type: String
    },
    columns: {
      type: Array,
      default: () => {}
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Object
    },
    searchParams: {
      type: Object,
      default: () => {}
    },
    remoteProps: {
      type: Object,
      default: () => {}
    },
    paginationProps: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      DEFAULT_TABLE_OPTIONS,
      DEFAULT_PAGE_OPTIONS,
      DEFAULT_REMOTE_PROPS,
      DEFAULT_PAGINATION_PROPS,
      tableData: [],
      total: 0,
      currentPage: 0,
      isLoading: false
    }
  },
  computed: {
    tableAttrs () {
      return Object.assign(this.DEFAULT_TABLE_OPTIONS, this.$attrs)
    },
    pageAttrs () {
      return Object.assign(this.DEFAULT_PAGE_OPTIONS, this.pagination)
    },
    remotePropsAttrs () {
      return Object.assign(this.DEFAULT_REMOTE_PROPS, this.remoteProps)
    },
    paginationPropsAttrs () {
      return Object.assign(this.DEFAULT_PAGINATION_PROPS, this.paginationProps)
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    // 获取深层属性
    getProps: (p, o) => p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o),
    getTableData () {
      if (this.type === 'remote') {
        this.fetchData()
      } else if (this.type === 'local') {
        this.tableData = this.data
      }
    },
    // 远程获取数据
    async fetchData () {
      let { dataProps, currentPageProps, totalProps } = this.remotePropsAttrs
      let {
        pageSizeParamProp,
        currentPageParamProp
      } = this.paginationPropsAttrs

      let queryParams = Object.assign(this.searchParams || {}, {
        [currentPageParamProp]: this.currentPage,
        [pageSizeParamProp]: this.pageAttrs.pageSize
      })

      // console.log(queryParams)
      this.isLoading = true
      try {
        let { data } = await this.$axios.post(this.url)
        this.tableData = this.getProps(dataProps, data) || []
        this.currentPage = this.getProps(currentPageProps, data)
        this.total = this.getProps(totalProps, data)
        this.isLoading = false
      } catch {
        this.isLoading = false
      }
    },
    // 搜索
    handelSearch (resrtCurrentPage = true) {
      if (resrtCurrentPage) {
        this.currentPage = 1
      }
      this.getTableData()
    },
    // 分页改变
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      this.getTableData()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
