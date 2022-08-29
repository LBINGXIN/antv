<template>
  <div id="user-map"></div>
</template>
<script>
import { Choropleth } from "@antv/l7plot";
// 地图数据
import data from "../data/userMap";
export default {
  mounted() {
    // 初始化地图
    // eslint-disable-next-line no-unused-vars
    const map = new Choropleth("user-map", {
      // 地图容器配置
      map: {
        type: "mapbox",
        style: "blank",
        center: [120.19382669582967, 30.258134],
        zoom: 3,
        pitch: 0,
        logo: false,
      },
      // 关联数据
      source: {
        data: data,
        joinBy: { sourceField: "code" },
      },
      // 地图等级
      viewLevel: {
        level: "country",
        adcode: 100000,
      },
      // 根据容器宽高自定义图表
      autoFit: true,
      // 设置地图颜色
      color: {
        field: "value",
        value: ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"],
        scale: { type: "quantile" },
      },
      // 边框
      chinaBorder: {
        // 国界
        national: null,
        // 争议
        dispute: { color: "#ccc", width: 1, opacity: 0.8, dashArray: [2, 2] },
        // 海洋
        coast: { color: "#ccc", width: 0.7, opacity: 0.8 },
        // 港澳
        hkm: { color: "gray", width: 0.7, opacity: 0.8 },
      },
      // 边界颜色
      style: {
        opacity: 1,
        stroke: "rgb(93,112,146)",
        lineWidth: 0.6,
        lineOpacity: 1,
      },
      // 数据标签
      label: {
        visible: false,
      },
      // 选择高亮
      state: {
        active: { stroke: "black", lineWidth: 1 },
      },
      // 提示
      tooltip: {
        inPlot: false,
        items: ["name", "code", "value"],
      },
    });
  },
};
</script>
<style lang="less" scoped>
#user-map {
  width: 100%;
  height: 300px;
}
</style>
