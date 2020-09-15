<template>
  <div class="comment-box">
    <div class="signInText" v-if="isSignIn === 0">登录留言吧</div>
    <div class="input-box" v-else>
      <div class="input-top">
        <div class="img">
          <img class="avatar" :src="imageUrl" alt="" />
          <p class="username">{{userInfo.nickname}}</p>
        </div>
        <div class="text">
          <textarea class="comment-content" v-model="submitText"></textarea>
        </div>
      </div>
      <div class="input-bottom">
        <a href="javascript:void(0)" class="submit" @click="publicComment">发表评论</a>
      </div>
    </div>
    <div class="all-comment">
      <p class="title">全部评论<span class="total">4</span>条</p>
      <div class="comment-list">
        <div class="comment-item" v-for="(item, index) in commentList" :key="index">
          <div class="item_l">
            <img :src="item.head_img" alt="" class="avatar" />
            <p class="username">{{item.nickname}}</p>
          </div>
          <div class="item_r">
            <div class="comment-content">
              <div class="comment_text">
                {{item.cm_content}}
              </div>
              <div class="comment_time">
                <div class="date">{{item.create_time}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitText: "",
      userInfo: {},
      imageUrl: '',
      commentList: []
    };
  },
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn;
    }
  },
  methods: {
    // 发表评论
    publicComment () {
      this.$axios.post('/api/comment/publish', {
        article_id: this.$route.params.id,
        content: this.submitText
      }).then(res => {
        if (res.data.code === 0) {
          this.submitText = ''
          this.$message.success(res.data.message)
          this.getComments()
        }
      })
    },
    // 获取评论列表
    getComments () {
      this.$axios.post('/api/comment/alllist', {
        article_id: this.$route.params.id
      }).then(res => {
        if (res.data.code === 0) {
          this.commentList = res.data.data
        }
      })
    },
    // 获取用户信息
    getUserInfo () {
      this.$axios.get("/api/user/info").then(res => {
        let result = res.data;
        if (result.code === 0) {
          this.userInfo = result.data;
          if (result.data.head_img === "" || result.data.head_img === null) {
            this.imageUrl = require("../assets/logo.png");
          } else {
            this.imageUrl = result.data.head_img;
          }
        }
      });
    }
  },
  created () {
    this.getUserInfo()
    this.getComments()
  }
};
</script>

<style lang="scss" scoped>
.comment-box {
  padding: 50px 30px;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157), 0 0px 3px rgba(0, 0, 0, 0.227);
  background: #fafafa;
  .signInText {
    color: #3b99fc;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
  .input-box {
    .input-top {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      .img {
        width: 100px;
        text-align: center;
        .avatar {
          display: inline-block;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid #333;
        }
        .username {
          line-height:25px;
          color: #3b99fc;
          cursor: pointer;
          word-break: break-all;
        }
      }
      .text {
        flex: 1;
        textarea {
          width: 98%;
          margin-left: 2%;
          min-height: 90px;
          font-size: 14px;
          border-radius: 6px;
          padding: 20px;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }
      }
    }
    .input-bottom {
      overflow:hidden;
      margin-top: 20px;
      .submit {
        float: right;
        width: 100px;
        height: 50px;
        line-height: 50px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
        border-radius: 6px;
        color: #fff;
        &:hover {
          background-color: rgba(0, 129, 255, 0.7);
        }
      }
    }
  }
  .all-comment {
    border-top: 1px solid #eee;
    padding: 30px 0;
    margin: 30px 0 0 0;
    .title {
      margin-bottom: 50px;
      font-size: 20px;
      font-weight: bold;
      border-left: 3px solid #3b99fc;
    }
    .comment-list {
      .comment-item {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        border-bottom: 1px solid #eee;
        .item_l {
          width: 100px;
          text-align: center;
          .avatar {
            display: inline-block;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 1px solid red;
            margin-bottom: 20px;
          }
          .username {
            color: #3b99fc;
            cursor: pointer;
            word-break: break-all;
          }
        }
        .item_r {
          flex: 1;
          .comment-content {
            width: 98%;
            margin-right: 2%;
            padding: 10px;
            box-sizing: border-box;
            font-size: 14px;
            color: #666;
            .comment_text {
              min-height: 70px;
            }
            .comment_time {
              text-align: right;
              padding: 10px 0;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
