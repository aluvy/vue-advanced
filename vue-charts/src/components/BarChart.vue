<template>
  <div>
    <canvas ref="BarChart"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    propsData: Array,
  },
  methods: {
    refreshChart() {
      this.$emit('refreshChart');
    },
    setBarChart() {
      const ctx = this.$refs.BarChart;

      new this.$_Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: this.propsData,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          onClick: (e) => {
            e.chart.data.datasets[0].data = [3, 7, 19, 14, 6, 11];
            e.chart.update();
          }
        }
      });
    }
  },
  mounted() {
    console.log('mounted');
    this.setBarChart();
    
  }
}
</script>
