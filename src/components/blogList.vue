<template>
  <div class="list">
    <div class="card" v-for="(item, index) in list" :key="index">
      <router-link :to='"/detail/" + item.id'>
        <p class="title">{{item.title}}</p>
      </router-link>
      <p class="date">{{item.create_time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      this.$axios.post("/api/article/alllist").then(res => {
        if (res.data.code === 0) {
          this.list = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding-bottom: 20px;
  margin-top: 15px;
  border-bottom: 1px solid #eee;
  .title {
    font-size: 26px;
    color: #0085a1;
    font-weight: 600;
  }
  .date {
    font-style: italic;
    font-family: "Times New Roman", serif;
    color: #808080;
    margin-top: 20px;
  }
}
.card:last-child {
  border: none;
}
</style>
