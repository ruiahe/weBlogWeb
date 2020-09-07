<template>
  <div class="sign_box">
    <div class="signIn" v-if="status === 1">
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
        key="login"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="signBtn" type="primary" @click="signIn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <span class="signText" @click="toSignUp">注册新账号</span>
    </div>
    <div class="signUp" v-else>
      <el-form
        :model="regForm"
        :rules="regRules"
        ref="regForm"
        label-width="0px"
        key="register"
      >
        <el-form-item prop="username">
          <el-input
            v-model="regForm.username"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="nickname">
          <el-input
            v-model="regForm.nickname"
            placeholder="请输入昵称"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="regForm.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="regForm.checkPass"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="signBtn" type="primary" @click="signUp"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
      <span class="signText" @click="toSignIn">返回登录</span>
    </div>
    <div v-loading.fullscreen.lock="loading"></div>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.regForm.checkPass !== "") {
          this.$refs["regForm"].validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.regForm.password) {
        callback(new Error("两次输入密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      status: 1,
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        name: [{ required: true, message: "请输入账号", trgger: "blue" }],
        password: [{ required: true, message: "请输入密码", trgger: "blue" }]
      },
      regForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      regRules: {
        name: [{ required: true, message: "请输入账号", trgger: "blue" }],
        password: [{ validator: validatePass, trgger: "blue" }],
        checkPass: [{ validator: validatePass2, trgger: "blue" }]
      }
    };
  },
  methods: {
    signIn() {
      this.$refs["loginForm"].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$axios.post("/api/user/login", this.loginForm).then(res => {
            let result = res.data;
            if (result.code === 0) {
              this.$cookie.set("token", result.token);
              this.$store.commit("setToken", result.token);
              this.$store.commit("changeIsSignIn", 1);
              setTimeout(() => {
                this.loading = false;
                this.$message.success("登录成功！");
                this.$router.push({ name: "home" });
              });
            } else {
              this.loading = false;
              this.$message.error(result.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
    signUp() {
      this.$refs["regForm"].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$axios.post("/api/user/register", this.regForm).then(res => {
            let result = res.data;
            if (result.code === 0) {
              this.loading = false;
              this.$message.success("注册成功！");
              this.toSignIn();
            } else {
              this.loading = false;
              this.$message.error(result.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toSignUp() {
      this.status = 2;
    },
    toSignIn() {
      this.status = 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.sign_box {
  width: 300px;
  margin: 200px auto 0;
  text-align: center;
  .signText {
    color: #3b78dd;
    cursor: pointer;
    &:hover {
      color: #1760d7;
    }
  }
}
.signBtn {
  width: 100%;
  font-size: 18px;
}
</style>
