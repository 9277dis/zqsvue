<script>
import navbar from '@/views/navbar'
import userApi from "@/api/UserApi";
import {time} from "mockjs/src/mock/random/date";

export default {
  name: "index",
  components: {navbar},
  data() {
    return {
      user: {
        loginName: '',
        password: '',
        repassword: "",
      }
    }
  },
  methods: {
    doRegist() {
      if (this.user.password !== this.user.repassword) {
        alert("两次输入的密码不一致")
        return
      }
      userApi.regist(this.user).then(res => {
        let r = res.data;
        if (!r.success) {
          alert(r.message)
          return
        }
        this.$router.push("/")// 注册成功后跳转到首页
      });
    }
  }, created() {
    document.title = '用户注册'// 修改网页标题
  }
}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h2 class="">用户注册</h2>
      <form action="#">
        <div class="form-control">
          <!--                    <label for="">用户名</label>-->
          <input type="text" v-model="user.loginName" placeholder="请输入用户名" required>
        </div>
        <div class="form-control">
          <!--                    <label for="">密码</label>-->
          <input type="password" v-model="user.password" placeholder="请输入密码" required>
        </div>
        <div class="form-control">
          <!--                    <label for="">重复密码</label>-->
          <input type="password" v-model="user.repassword" placeholder="请重复密码" required>
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
  //margin-left: 6px;
  float: right;
  margin-top: 5px;
  color: #000;
  padding: 2px;
}
</style>