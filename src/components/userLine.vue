<template>
  <div id="user-line"></div>
</template>
<script>
import { Chart } from "@antv/g2";
export default {
  mounted() {
    const data = [
      { time: "8/1", value: 240 },
      { time: "8/10", value: 600 },
      { time: "8/20", value: 350 },
      { time: "8/31", value: 470 },
    ];
    const chart = new Chart({
      container: "user-line",
      autoFit: true,
      height: 276,
      padding: [100, 20, 30, 40],
    });

    chart.data(data);
    chart.scale({
      value: {
        min: 0,
        nice: true,
        alias: "用户",
      },
      time: {
        range: [0, 1],
      },
    });
    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis("value", {
      grid: null,
      tickLine: null,
    });

    chart.axis("time", {
      line: null,
      tickLine: null,
    });

    chart.line().position("time*value").color("#edbf45").shape("smooth");

    chart.render();
  },
};
</script>
<style lang="less" scoped>
#user-line {
  width: 100%;
  height: 100%;
}
</style>
