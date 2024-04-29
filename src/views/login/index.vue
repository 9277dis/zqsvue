<script>
import userApi from "@/api/UserApi";

export default {
  name: "index",
  data() {
    return {
      user: {
        loginName: '',
        password: '',
      }
    }
  },
  methods: {
    doLogin() {
      userApi.login(this.user).then(res => {
        let r = res.data;
        if (!r.success) {
          alert(r.message)
        } else {
          // 登录成功后，将用户信息存储到localStorage中
          // localStorage.setItem("user", JSON.stringify(users.id))
          this.$store.dispatch("setLoginUserId", r.data)
          let redirectURL = this.$route.query.redirectURL || '/index';
          this.$router.push(redirectURL);
        }
      })
    }
  },
  created() {
    // 页面加载时执行的代码
    console.log("页面加载时执行的代码");
    console.log("this", this);
    console.log("this.$router", this.$router);
    console.log("this.$route", this.$route);
    console.log("this.$store", this.$store);
    document.title = '用户登录'
    //   在页面加载时，从localStorage中获取用户信息，如果已登录，则跳转到下一页
    // if (!!localStorage.getItem('user')) {
    //   this.$router.push('/index')
    // }
  },
}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h2 class="">用户登录</h2>
      <form action="#">
        <div class="form-control">
          <!--          <label for="">用户名</label>-->
          <input type="text" v-model="user.loginName" placeholder="请输入用户名" required>
        </div>
        <div class="form-control">
          <!--          <label for="">密码</label>-->
          <input type="password" v-model="user.password" placeholder="请输入密码" required>
        </div>
        <div class="form-control text-center">
          <button type="button" class="btn btn-primary" @click="doLogin">立即登录</button>
          <span class="text-muted ml6">没有账号？
            <router-link to="/regist">前往注册</router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 350px;
  background: #000;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
}


.login-container {
  position: relative;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}

.ml6 {
  float: right;
  margin-top: 5px;
  color: #000;
  padding: 2px;
}
</style>