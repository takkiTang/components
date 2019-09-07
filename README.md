# 基于 Element-ui 二次封装的组件库 

Vue 版本的 2.6.10 
Eelment-ui 版本的 2.12.0


# Table

### 属性

|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | :---  |  ----  |  ----  |  ----  |
| type | 数据来源类型，包含远程和本地两种 | String | remote，local（待开发） | remote |
| data | 本地数据，仅在 type='local' 时有效 | Array | - | - |
| url | 远程数据接口地址，仅在 type='remote' 时有效 | String | - | - |
| remoteProps | 接口返回值对应数据的字段值配置，具体配置见下面 **Remote Props** 属性，仅在 type='remote' 时有效 | String | - | - |
| searchParams | 搜索参数，仅在 type='remote' 时有效 | Object | - | - |
| columns | table column配置对象的数组,具体配置见下面 **Table column** 属性 | Array | - | - |
| loading |表格loading效果，仅在 type='remote' 时有效| Boolean | true，false | true |
| showPagination | 是否显示分页 | Boolean | true，false | true |
| pagination | pagination 分页配置对象的数组，具体配置同element ui分页配置 | Object | - | - |
| paginationProps | 分页入参的字段值配置,具体配置见下面 **Pagination Props** 属性 | String | - | total |

### Remote Props 属性
|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | :---  |  ----  |  ----  |  ----  |
| dataProp | 数据字段 | String | - | data |
| currentPageProp | 当前页字段 | String | - | currentPage |
| totalProp | 总数字段 | String | - | total |

### Pagination Props 属性
|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | :---  |  ----  |  ----  |  ----  |
| pageSizeParamProp | 每页个数字段 | String | - | pageSize |
| currentPageParamProp | 当前页字段 | String | - | currentPage |


### Table column 属性

|  参数  | 说明 | 类型 | 可选值 | 默认值 |
|  ----  | :---  |  ----  |  ----  |  ----  |
| prop | 展示字段的字段值 | String | - | - |
| label | 列名 | String | - | - |
| filter | 过滤器名（只有配置在全局的filter才有效） | String | - | - |
| render | 处理数据的函数，接收行数据作为参数，支持jsx | function | - | - |
| type | 当type='slot'，自定义内容 | String | slot | - |

### 事件

参考element-ui



## search 

### 属性

| 参数     | 说明                              | 类型     | 可选值 | 默认值 |
| -------- | :-------------------------------- | -------- | ------ | ------ |
| type     | 表单类型，具体见下面**Type **属性 | String   | -      | text   |
| key      | 字段名                            | String   | -      | -      |
| class    | 类名                              | String   | -      | -      |
| props    | 属性，详细可参考Element-ui        | Object   | -      | -      |
| getPorps | 通过方法获取props                 | Function | -      | -      |



### Type 属性

| 参数        | 说明       |
| ----------- | :--------- |
| text        | 输入框     |
| radio       | 单选框     |
| checkbox    | 复选框     |
| InputNumber | 计数器     |
| select      | 选择器     |
| cascader    | 级联选择器 |


