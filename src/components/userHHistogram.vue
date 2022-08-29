<template>
  <div id="user-h-histogram"></div>
</template>
<script>
import { Chart } from "@antv/g2";
export default {
  mounted() {
    // 数据源
    const data = [
      { type: "香蕉", value: 460 },
      { type: "苹果", value: 600 },
      { type: "菠萝", value: 390 },
      { type: "榴莲", value: 205 },
    ];
    // 初始化图表
    const chart = new Chart({
      container: "user-h-histogram",
      autoFit: true,
      height: 276,
      padding: [50, 60, 10, 60],
    });
    // 关联数据
    chart.data(data);
    // 图表关联数据chart.position()方法决定的，在下面有设置chart.position("type*value")
    // 前面为x轴，所以 type 为 x 轴， value 为 y 轴

    // 设置 x 轴坐标系
    chart.axis("type", {
      grid: null,
      tickLine: null,
      line: null,
    });
    // 设置 y 轴坐标系
    chart.axis("value", {
      grid: null,
      label: null,
    });
    // 隐藏图例
    chart.legend(false);
    // x，y 轴置换
    chart.coordinate().transpose();
    // chart.interval(options) 柱状图
    // geom.position() 配置 position 通道映射规则
    // geom.size 设置图形大小
    // geom.color 设置图形颜色
    // geom.label 数据标签设置
    chart
      .interval()
      .position("type*value")
      .size(12)
      .color("#678ef2")
      .label("value", {
        style: {
          fill: "#8d8d8d",
        },
        offset: 10,
      });
    chart.interaction("element-active");
    // 渲染图形
    chart.render();
  },
};
</script>
<style lang="less" scoped>
#user-h-histogram {
  width: 100%;
  height: 100%;
}
</style>
