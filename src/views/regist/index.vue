<script>
export default {
  name: "index",
  methods: {
    doRegist() {
      this.$router.push("/")
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h2 class="text-center">用户注册</h2>
      <form action="#">
        <div class="form-control">
          <label for="">用户名</label>
          <input type="text" name="" id="" placeholder="请输入用户名">
        </div>
        <div class="form-control">
          <label for="">密码</label>
          <input type="password" name="" id="" placeholder="请输入密码">
        </div>
        <div class="form-control">
          <label for="">重复密码</label>
          <input type="password" name="" id="" placeholder="重复密码">
        </div>
        <div class="form-control text-center">
          <button type="button" class="btn btn-primary" @click="doRegist">注册</button>
          <span class="text-muted ml6">已有账号？
            <router-link to="/">登录</router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>

.container {
  background: url(http://api.0cs.cc) no-repeat;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.login-container {
  width: 33%;
  background-color: rgba(148, 145, 145, 0.68);
  border-radius: 10px;
  padding: 20px;
}

.ml6 {
  margin-left: 6px;
}
</style>