import ChartUtils from '../utils/ChartUtils.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  install(Vue) {
    console.log('chart plugin loaded');
    Vue.prototype.$_Chart = Chart; // $_Chart 에 등록
    Vue.prototype.$_ChartUtils = ChartUtils;
  },
};
