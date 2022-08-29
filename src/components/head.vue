<template>
  <div class="head">
    <div class="head-left">
      <div class="head-left-block" v-if="showBlock"></div>
      <div class="head-left-title">{{ title }}</div>
    </div>
    <div class="head-right">
      <div class="head-right-desc" v-if="desc">
        <div
          class="head-right-desc-dot"
          :style="{ background: dotColor }"
        ></div>
        <div class="head-right-desc-value">{{ desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 显示标题色块
    showBlock: {
      type: Boolean,
      default: false,
    },
    // 标题
    title: {
      type: String,
      default: "",
    },
    // 显示提示内容
    tip: {
      type: String,
      default: "",
    },
    // 点颜色
    dotColor: {
      type: String,
      default: "#0B83DE",
    },
    desc: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less" scoped>
.head {
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  width: 100%;
  z-index: 100;
  &-left {
    position: relative;
    display: flex;
    height: 20px;
    align-items: center;
    &-block {
      width: 4px;
      height: 20px;
      background: #0da042;
      border-radius: 2px;
      margin-right: 8px;
    }
    &-title {
      font-size: 18px;
      color: #fff;
      line-height: 20px;
      margin-right: 15px;
    }
  }
  &-right {
    &-desc {
      display: flex;
      align-items: center;
      height: 20px;
      &-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #6f63f4;
        margin-right: 8px;
      }
      &-value {
        font-size: 14px;
        color: #fff;
        line-height: 20px;
      }
    }
  }
}
</style>
