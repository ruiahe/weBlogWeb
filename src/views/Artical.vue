<template>
  <div class="wrapper">
    <h1 class="title">文章列表</h1>
    <div class="article">
      <el-button class="addBtn" @click="handleAdd">新增+</el-button>
      <el-table :data="articleList" border stripe>
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <icon className="time"></icon>
            <span>{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleLook(scope.row)"
              >查看</el-button
            >
            <el-button size="mini" type="success" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button size="mini" type="danger" @click="handleDelet(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
    };
  },
  created () {
    this.getMyblogList()
  },
  methods: {
    // 获取我的博客列表
    getMyblogList () {
      this.$axios.post('/api/article/mylist').then(res => {
        if (res.data.code === 0) {
          this.articleList = res.data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleAdd() {
      this.$router.push({ name: "editArticle" });
    },
    handleLook(row) {
      let id = row.id;
      window.open("#/detail/" + id);
    },
    handleEdit(row) {
      let id = row.id;
      this.$router.push({ path: `/artical/edit/${id}` });
    },
    handleDelet(row) {
      let id = row.id;
      this.$confirm("此操作将永久删除该文章，是否继续？", "提示", {
        confirmButtonText: "确定",
        cacelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$axios.post('/api/article/delete', {article_id: id}).then(res => {
          console.log(res)
          if (res.data.code === 0) {
            this.getMyblogList()
            this.$message({
              type: "success",
              message: `删除成功!`
            });
          }
        })
      }).catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin: 30px 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
}
.article {
  .addBtn {
    float: right;
    margin-bottom: 20px;
  }
}
/deep/ .el-table {
  .cell {
    text-align: center;
  }
}
</style>
