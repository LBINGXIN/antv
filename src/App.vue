<template>
  <div class="page">
    <!-- 折线图 -->
    <div class="page-item">
      <Head showBlock title="用户中心" desc="日活用户"></Head>
      <UserLine></UserLine>
    </div>
    <div class="page-item">
      <Head showBlock title="用户中心" desc="日活用户"></Head>
      <UserArea></UserArea>
    </div>
    <!-- 折线图 -->

    <!-- 柱状图 -->
    <div class="page-item">
      <Head showBlock title="用户中心" desc="日活用户"></Head>
      <UserHHistogram></UserHHistogram>
    </div>
    <div class="page-item">
      <Head showBlock title="用户中心" desc="日活用户"></Head>
      <UserVHistogram></UserVHistogram>
    </div>
    <!-- 柱状图 -->

    <!-- 饼图 -->
    <div class="page-item">
      <Head showBlock title="用户中心" desc="日活用户"></Head>
      <UserPie></UserPie>
    </div>
    <div class="page-item">
      <Head showBlock title="用户中心" desc="日活用户"></Head>
      <UserRing></UserRing>
    </div>
    <!-- 饼图 -->

    <!-- 地图 -->
    <div class="page-item">
      <Head showBlock title="用户中心"></Head>
      <UserMap></UserMap>
    </div>
    <div class="page-item">
      <Head showBlock title="用户中心"></Head>
      <UserProvince></UserProvince>
    </div>
    <!-- 地图 -->
  </div>
</template>

<script>
import Head from "./components/head.vue";
import UserArea from "./components/userArea.vue";
import UserLine from "./components/userLine.vue";

import UserHHistogram from "./components/userHHistogram.vue";
import UserVHistogram from "./components/userVHistogram.vue";

import UserPie from "./components/userPie.vue";
import UserRing from "./components/userRing.vue";

import UserMap from "./components/userMap.vue";
import UserProvince from "./components/userProvince.vue";

export default {
  name: "App",
  components: {
    Head,
    UserArea,
    UserLine,
    UserHHistogram,
    UserVHistogram,
    UserPie,
    UserRing,
    UserMap,
    UserProvince,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.page {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background: #0b0c11;
  padding: 0 25px;
  &-item {
    position: relative;
    width: calc((100% - 48px) / 4);
    height: 300px;
    border: 1px solid skyblue;
    margin-top: 20px;
  }
}
</style>
