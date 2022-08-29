<template>
  <div id="user-pie"></div>
</template>
<script>
import { Chart } from "@antv/g2";
export default {
  mounted() {
    const data = [
      { name: "短信", count: 40, percent: 0.4 },
      { name: "邮件", count: 21, percent: 0.21 },
      { name: "电话", count: 17, percent: 0.17 },
      { name: "语音", count: 13, percent: 0.13 },
      { name: "通话", count: 9, percent: 0.09 },
    ];

    const chart = new Chart({
      container: "user-pie",
      autoFit: true,
      padding: [32, 160, 30, 30],
    });

    chart.coordinate("theta", {
      radius: 0.75,
    });

    chart.data(data);

    chart.legend({
      title: null,
      marker: "circle",
      position: "right",
      flipPage: false,
      offsetX: -50,
      itemName: {
        style: {
          fill: "#fff",
        },
        formatter(text, item, index) {
          const { name, count } = data[index];
          return `${name} ${count}`;
        },
      },
    });

    chart.tooltip({
      showTitle: false,
      showMarkers: false,
    });

    chart
      .interval()
      .position("percent")
      .color("name")
      .adjust("stack")
      .tooltip("name*percent", (name, percent) => {
        percent = percent * 100 + "%";
        return {
          name: name,
          value: percent,
        };
      });

    chart.interaction("element-active");

    chart.render();
  },
};
</script>
<style lang="less" scoped>
#user-pie {
  width: 100%;
  height: 100%;
}
</style>
