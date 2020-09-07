<template>
  <header>
    <div class="wrapper">
      <el-row>
        <el-col :span="4">
          <div class="logo">box博客</div>
        </el-col>
        <el-col :span="20">
          <el-menu
            class="nav"
            mode="horizontal"
            :default-active="$route.path"
            @select="handleSlector"
            background-color="#2d2d2d"
            text-color="#9d9d9d"
            active-text-color="#fff"
          >
            <el-menu-item index="/">
              <router-link to="/">
                <icon className="shouye"></icon>
                首页
              </router-link>
            </el-menu-item>
            <el-menu-item index="/artical" v-if="isSignIn === 1">
              <router-link to="/artical">我的博客</router-link>
            </el-menu-item>
            <el-menu-item index="/login" v-if="isSignIn === 0">
              <router-link to="/login">登录</router-link>
            </el-menu-item>
            <el-menu-item index="/personal" v-else-if="isSignIn === 1">
              <router-link to="/personal">{{ nickname }}</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {
  data: function() {
    return {
      activeIndex: this.$router.path,
      nickname: ""
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    handleSlector(index) {
      this.activeIndex = index + "";
    },
    getUserInfo() {
      this.$axios
        .get("/api/user/info")
        .then(res => {
          let result = res.data;
          if (result.code === 0) {
            this.nickname = result.data.nickname;
          }
        })
        .catch(() => {
          this.$router.push({ path: "/login" });
        });
    }
  },
  computed: {
    isSignIn() {
      console.log(this.$store.state.isSignIn);
      return this.$store.state.isSignIn;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #2d2d2d;
  color: #9d9d9d;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  .logo {
    line-height: 60px;
    font-size: 18px;
  }
  .nav {
    float: right;
    border-bottom: none;
    li {
      padding: 0;
      a {
        display: inline-block;
        padding: 0 20px;
      }
    }
  }
}
</style>
