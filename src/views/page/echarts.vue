<template>
  <div class="echart">
    <div id="barCharts"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      barchart: null
    };
  },
  mounted() {
    this.inItChart();
    let vm = this;
    setTimeout(function() {
      window.onresize = function() {
        vm.barchart.resize();
      };
    }, 200);
  },
  methods: {
    inItChart() {
      this.barchart = this.$echarts.init(document.getElementById("barCharts"));
      this.barchart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "10%",
          right: "20%",
          bottom: "10%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      });
    }
  }
};
</script>
<style  scoped lang="less">
.echart {
  width: 100%;
  height: calc(100% - 50px);
  #barCharts {
    width: 100%;
    height: 100%;
    padding: 50px;
  }
}
</style>


