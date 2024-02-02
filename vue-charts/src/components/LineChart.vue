<template>
  <div>
    <canvas ref="LineChart"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const ctx = this.$refs.LineChart;

    new this.$_Chart(ctx, {
      type: 'line',
      data: {
        labels: this.$_ChartUtils.months({count: 7}),
        datasets: [
          {
            label: 'Dataset 1',
            data: [ 30, 22, 56, 77, 21, 99, 81 ],
            borderColor: this.$_ChartUtils.COLOR.red,
            backgroundColor: this.$_ChartUtils.BGCOLOR.red,
          },
          {
            label: 'Dataset 2',
            data: [ 1, 30, 20, 77, 2, 67, 88 ],
            borderColor: this.$_ChartUtils.COLOR.blue,
            backgroundColor: this.$_ChartUtils.BGCOLOR.blue,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    });
  }
}
</script>
