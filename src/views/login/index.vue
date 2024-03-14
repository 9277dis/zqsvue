<script>
export default {
  name: "index"
}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h2 class="text-center">用户登录</h2>
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
          <input type="submit" value="登录">
          <span>没有账号？
          <router-link to="/regist"/>去注册
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>

.container {
  //background-color: #f1f1f1;
  background: url(http://api.0cs.cc) no-repeat;
  background-size: cover;
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
  padding: 15px;
}
</style>