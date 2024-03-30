<script>

export default {
  name: "index",
  methods: {
    doLogin(uname, upwd) {
      uname = this.uname;
      upwd = this.upwd;
      // 判断用户名和密码是否为空
      if (uname === '' || upwd === '') {
        console.log("用户名或密码不能为空");
        alert("用户名或密码不能为空");
        return false;
      }
      console.log("uname", uname, "upwd", upwd)
      // 判断用户名和密码是否匹配
      const user = this.users.find(user => user.uname === uname && user.upwd === upwd);
      if (user) {
        // 登录成功，可以跳转到其他页面或显示成功信息
        console.log('登录成功', user);
      } else {
        alert('用户名或密码错误')
        return false
      }
      // 登录成功后跳转到首页
      this.$router.push('/index');
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
  },
  data() {
    return {
      users: [{
        uname: 'root',
        upwd: '123456'
      }, {
        uname: 'guest',
        upwd: '123456'
      }, {
        uname: 'admin1',
        upwd: '123456'
      }, {
        uname: 'admin2',
        upwd: '123456'
      }, {
        uname: 'admin',
        upwd: '123456'
      }, {
        uname: 'user',
        upwd: '123456'
      }
      ],
      uname: '',
      upwd: ''
    }

  }
}
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h2 class="">用户登录</h2>
      <form action="#">
        <div class="form-control">
          <!--          <label for="">用户名</label>-->
          <input type="text" v-model="uname" placeholder="请输入用户名" required>
        </div>
        <div class="form-control">
          <!--          <label for="">密码</label>-->
          <input type="password" v-model="upwd" placeholder="请输入密码" required>
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