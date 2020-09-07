<template>
  <div class="home">
    <div class="wrapper">
      <div class="main">
        <blog-list></blog-list>
      </div>
    </div>
  </div>
</template>

<script>
import blogList from "@/components/blogList.vue";
export default {
  components: { blogList }
};
</script>

<style lang="scss" scoped>
.main {
  margin: 0 20px;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.1) inset;
}
</style>
