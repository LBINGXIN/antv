<template>
  <div id="user-province"></div>
</template>
<script>
import { L7Plot } from "@antv/l7plot";
import data from "../data/zhejianprovince";
// import data from "../data/map";
export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const map = new L7Plot("user-province", {
      map: {
        type: "mapbox",
        style: "blank",
        center: [120.19382669582967, 30.258134],
        zoom: 4,
        pitch: 0,
      },
      logo: false,
      plots: [
        {
          type: "choropleth",
          source: {
            data: data,
            joinBy: {
              sourceField: "code",
            },
          },
          viewLevel: {
            // level: "country",
            // adcode: 100000,
            level: "province",
            adcode: 330000,
          },
          autoFit: true,
          color: {
            field: "value",
            value: ["#B8E1FF", "#7DAAFF", "#3D76DD", "#0047A5", "#001D70"],
            scale: { type: "quantile" },
          },
          chinaBorder: {
            // 国界
            national: null,
            // 争议
            dispute: {
              color: "#ccc",
              width: 1,
              opacity: 0.8,
              dashArray: [2, 2],
            },
            // 海洋
            coast: { color: "#ccc", width: 0.7, opacity: 0.8 },
            // 港澳
            hkm: { color: "gray", width: 0.7, opacity: 0.8 },
          },
          style: {
            opacity: 1,
            stroke: "rgb(93,112,146)",
            lineWidth: 0.6,
            lineOpacity: 1,
          },
        },
        {
          type: "dot",
          zIndex: 2,
          source: {
            data: data,
            parser: { type: "json", x: "lng", y: "lat" },
          },
          color: "#1AA9FF",
          size: 8,
          state: {
            active: { stroke: "black", lineWidth: 1 },
          },
          tooltip: {
            items: ["name", "code", "value"],
          },
        },
      ],
    });
  },
};
</script>
<style lang="less" scoped>
#user-province {
  width: 100%;
  height: 100%;
}
</style>
