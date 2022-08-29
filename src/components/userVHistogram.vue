<template>
  <div id="user-v-histogram"></div>
</template>
<script>
import { Chart } from "@antv/g2";
export default {
  mounted() {
    const data = [
      { time: "1月", value: 30 },
      { time: "2月", value: 55 },
      { time: "3月", value: 75 },
      { time: "4月", value: 53 },
      { time: "5月", value: 30 },
      { time: "6月", value: 15 },
      { time: "7月", value: 30 },
      { time: "8月", value: 30 },
      { time: "9月", value: 30 },
      { time: "10月", value: 15 },
      { time: "11月", value: 30 },
      { time: "12月", value: 30 },
    ];

    const chart = new Chart({
      container: "user-v-histogram",
      autoFit: true,
      height: 276,
      padding: [100, 20, 30, 40],
    });
    chart.data(data);
    chart.axis("time", {
      grid: null,
      title: null,
      tickLine: null,
      line: null,
    });
    chart.axis("value", {
      grid: null,
    });

    chart.interval().position("time*value").color("#83DAAD");

    chart.interaction("element-active");
    chart.render();
  },
};
</script>
<style lang="less" scoped>
#user-v-histogram {
  width: 100%;
  height: 100%;
}
</style>
