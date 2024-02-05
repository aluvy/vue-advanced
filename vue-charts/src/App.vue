<template>
  <div>
    <h1>Chart.js</h1>
    <BarChart :propsData="chartDataSet"></BarChart>
    <LineChart></LineChart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'

export default {
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartDataSet: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          this.$_ChartUtils.BGCOLOR.red,
          this.$_ChartUtils.BGCOLOR.blue,
          this.$_ChartUtils.BGCOLOR.yellow,
          this.$_ChartUtils.BGCOLOR.green,
          this.$_ChartUtils.BGCOLOR.purple,
          this.$_ChartUtils.BGCOLOR.orange
        ],
        borderColor: [
        this.$_ChartUtils.COLOR.red,
          this.$_ChartUtils.COLOR.blue,
          this.$_ChartUtils.COLOR.yellow,
          this.$_ChartUtils.COLOR.green,
          this.$_ChartUtils.COLOR.purple,
          this.$_ChartUtils.COLOR.orange
        ],
        borderWidth: 1,
      }],
    }
  },
  // created() {
  //   axios.get('charts/line/1')
  //     .then( res => this.chartDataSet = res.data )
  //     .catch( e => console.log(e) )
  // }
}
</script>
