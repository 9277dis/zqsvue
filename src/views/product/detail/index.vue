<script>
import productApi from "@/api/productApi";

export default {
  name: "index",
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    let id = this.$route.query.id;
    productApi.detail(id)
        .then(res => this.product = res.data.data)
  },
  methods: {
    goToCart() {
      this.$router.push('/cart')
    }
  }, created() {
    document.title = '商品详情'
  }
}
</script>

<template>
  <div class="container">
    <div class="img-container">
      <div class="big">
        <img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt="">
      </div>
      <div class="small">
        <div><img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt=""></div>
        <div class="active"><img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt=""></div>
        <div><img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt=""></div>
        <div><img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt=""></div>
        <div><img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt=""></div>
      </div>
    </div>
    <div class="info-container">
      <h3 v-text="product.name"></h3>
      <div class="price">
        ¥<span class="price-num" v-text="product.price"></span>
      </div>
      <div class="bimg">
        <img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt="">
      </div>
      <div class="mt20">
        <button class="btn btn-primary" @click="goToCart">加入购物车</button>
        <router-link to="/index">
          <button class="btn btn-warning ml6">返回上一页</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ml6 {
  margin-left: 6px;
}

.mt20 {
  width: 300px;
  margin-top: 20px;
  margin-left: 20px;
}

.price {
  font-size: 1.4rem;
  color: var(--primary-color);
  font-weight: bold;
}

:root {
  --img: "https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640";
}

.price-num {
  font-size: 1.8rem;
}

.bimg img {
  width: 300px;
  height: 300px;
  border-radius: 10px;
}

.active {
  border: 4px solid black;
}

.small {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.small > div {
  width: 19%;
  padding: 2px;
}

.small > div > img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.container {
  width: 80%;
  margin: 40px auto 0;
  padding-top: 50px;
}

.img-container {
  display: inline-block;
  width: 33%;
  height: 200px;
}

.info-container {
  display: inline-block;
  width: 60%;
  height: 200px;
  vertical-align: top;
  padding-left: 45px;
}

.info-container h3 {
  margin-top: 0;
}

.big img {
  width: 80%;
  border-radius: 10px;
  border: 1px solid white;
}

.btn {
  border: 1px solid white;
}

.btn-warning {
  border: 1px solid black;
}

.btn:hover {
  background-color: var(--primary-color);
  color: white;
  border: 1px solid black;
}
</style>