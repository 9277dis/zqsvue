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
      <h2 class="">用户注册</h2>
      <form action="#">
        <div class="form-control">
          <!--          <label for="">用户名</label>-->
          <input type="text" name="" id="" placeholder="请输入用户名">
        </div>
        <div class="form-control">
          <!--          <label for="">密码</label>-->
          <input type="password" name="" id="" placeholder="请输入密码">
        </div>
        <div class="form-control">
          <!--          <label for="">重复密码</label>-->
          <input type="password" name="" id="" placeholder="重复密码">
        </div>
        <div class="form-control text-center">
          <button type="button" class="btn btn-primary" @click="doRegist">立即注册</button>
          <span class="text-muted ml6">已有账号？
            <router-link to="/">返回登录</router-link>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>


.container {
  position: relative;
  width: 400px;
  //min-height: 400px;
  background: #000;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
}

.login-container {
  //width: 33%;
  //background-color: rgba(148, 145, 145, 0.68);
  //border-radius: 10px;
  //padding: 20px;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
}

.ml6 {
  //margin-left: 6px;
  float: right;
  margin-top: 5px;
  color: #000;
  padding: 2px;
}
</style>