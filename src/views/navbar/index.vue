<script>
export default {
  name: "index"
}
</script>

<template>
  <div class="container">
    <div class="logo">在线商城</div>
    <div class="nav-links">
      <router-link to="/index">首页</router-link>
      <router-link to="/cart">购物车</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/">退出</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 100%;
  width: 100vw;
  height: 40px;
  display: flex;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
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