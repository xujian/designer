import PropTypes from './PropTypes'
/**
 * 包含对指定组件的属性定义
 */
const charts = [
  {
    name: 'round',
    options: {
      type: Boolean,
      label: '圆角柱条'
    }
  },
  {
    name: 'barGap',
    options: {
      type: PropTypes.Percent,
      label: '柱条间距'
    }
  },
  {
    name: 'barWidth',
    options: {
      type: Number,
      label: '柱条宽度'
    }
  }
] 

export default {
  charts
}
