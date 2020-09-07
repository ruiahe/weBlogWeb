<template>
  <svg class="icon" aria-hidden="true">
    <use :href="`#icon-${className}`"></use>
  </svg>
</template>

<script>
import "./icon-font.js";
import "./icon-font.css";
export default {
  props: {
    className: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log("测试", this.className);
  }
};
</script>

<style lang="scss" scoped></style>
