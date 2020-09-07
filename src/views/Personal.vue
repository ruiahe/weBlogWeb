<template>
  <div class="wrapper">
    <div class="content">
      <el-form :model="form" ref="form" label-width="80px">
        <el-form-item label="昵称">
          <el-input v-model="form.nickname" class="nickname"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:3000/api/user/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            name="head_img"
          >
            <img class="avatar" :src="imageUrl" v-if="imageUrl !== null" />
            <img class="avatar" :src="imageUrl" v-else />
          </el-upload>
          <p class="tips">tips:请上传2M以内的JPG.PNG格式的图片，比例最好1:1</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
          <el-button>退出登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import imgDefault from "../assets/logo.png";
export default {
  data() {
    return {
      form: {
        nickname: ""
      },
      imageUrl: null,
      imgDefault
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    // 获取个人信息
    getUserInfo() {
      this.$axios.get("/api/user/info").then(res => {
        let result = res.data;
        if (result.code === 0) {
          this.form = result.data;
          if (result.data.head_img === "" || result.data.head_img === null) {
            this.imageUrl = require("../assets/logo.png");
          } else {
            this.imageUrl = result.data.head_img;
          }
        }
      });
    },
    handleAvatarSuccess(res) {
      this.imageUrl = res.data;
    },
    save() {
      this.$axios
        .post("/api/user/updateUser", {
          nickname: this.form.nickname,
          head_img: this.imageUrl
        })
        .then(() => {
          this.$message.success("更新成功！");
          this.getUserInfo();
        })
        .catch(() => {
          this.$message.error("更新失败。。。");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh - 207px);
  .content {
    width: 40%;
    margin: 0 auto;
    padding: 50px 0;
    .nickname {
      width: 70%;
    }
  }
}
/deep/ .avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #979899;
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
.tips {
  font-size: 12px;
  color: #999;
}
</style>
