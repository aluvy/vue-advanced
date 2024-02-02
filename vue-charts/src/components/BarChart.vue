<template>
  <div>
    <canvas ref="BarChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const ctx = this.$refs.BarChart;

    new this.$_Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
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
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
</script>
