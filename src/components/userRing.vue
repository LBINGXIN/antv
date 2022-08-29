<template>
  <div id="user-ring"></div>
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
      container: "user-ring",
      autoFit: true,
      padding: [32, 160, 30, 30],
    });

    chart.coordinate("theta", {
      radius: 0.75,
      innerRadius: 0.7,
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
    // 辅助文本
    chart
      .annotation()
      .text({
        position: ["50%", "50%"],
        content: "用户类型",
        style: {
          fontSize: 14,
          fill: "#fff",
          textAlign: "center",
        },
        offsetY: -9,
      })
      .text({
        position: ["50%", "50%"],
        content: "占比",
        style: {
          fontSize: 14,
          fill: "#fff",
          textAlign: "center",
        },
        offsetY: 9,
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
#user-ring {
  width: 100%;
  height: 100%;
}
</style>
