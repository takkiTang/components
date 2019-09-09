export default {
  text: {
    component: 'el-input',
    props: {}
  },
  radio: {
    component: 'el-radio',
    props: {}
  },
  select: {
    component: 'el-select',
    children: {
      component: 'el-option'
    },
    props: {}
  }
}
