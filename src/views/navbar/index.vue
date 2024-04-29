<script>
export default {
  name: "index",
  methods: {
    logout() {
      //   清除localstorage中的所有数据
      localStorage.removeItem("user");
      // 跳转到登录页面
      this.$router.push("/");
    }
  }
}
</script>

<template>
  <div class="navbar-container">
    <div class="logo">在线商城</div>
    <div class="nav-links">
      <router-link to="/index">首页</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/" @click="logout()">退出</router-link>
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
  justify-content: space-between;
  align-content: center;
  position: fixed;
  max-width: 100%;
  width: 100vw;
  height: 40px;
  display: flex;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  line-height: 40px;
}

.logo {
  font-size: 20px;
}

.nav-links {
  display: flex;
  font-size: 20px;
  color: #333;
  text-align: center;
  text-decoration: none;
}

.nav-links a {
  margin: 0 10px;
}

.nav-links a:hover {
  color: var(--primary-color);
}

</style>