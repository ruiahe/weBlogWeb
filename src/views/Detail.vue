<template>
  <div class="blog-content-box">
    <div class="wrapper">
      <div class="title">{{detail.title}}</div>
      <div class="time">
        <div class="date"><icon className="rili"></icon>{{detail.create_time}}</div>
      </div>
      <div class="detail">
        <mavon-editor
          v-model="detail.content"
          defaultOpen="preview"
          :toolbarsFlag="false"
          :subfield="false"
        ></mavon-editor>
      </div>
      <comment></comment>
    </div>
  </div>
</template>

<script>
import comment from "@/components/comment.vue";
export default {
  data() {
    return {
      detail: {}
    };
  },
  components: { comment },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      this.$axios.get("/api/article/detail", {
        params: {
          article_id: this.$route.params.id
        }
      }).then(res => {
        console.log(res)
        if (res.data.code === 0) {
          this.detail = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-content-box {
  min-height: calc(100vh - 220px);
}
.wrapper {
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 30px rgba(10, 10, 0, 0.1) inset;
  .title {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
  }
  .time {
    text-align: center;
    margin: 10px 0 40px;
    color: #999;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;
    .icon {
      margin-right: 3px;
      vertical-align: -0.25em;
    }
  }
}
</style>
