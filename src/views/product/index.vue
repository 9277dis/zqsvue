<script>

import item from "@/views/product/item";
import productApi from "@/api/productApi";

export default {
  name: "index",
  components: {item},
  data() {
    return {products: []}
  },
  methods: {
    toDetail(id) {
      this.$router.push('/detail?id=' + id)
    },

  },
  created() {
    document.title = '首页'
  },
  mounted() {
    productApi.listAll().then(res => this.products = res.data.data)
  }
}
</script>

<template>
  <div class="container">
    <div @click="toDetail(item.id)" v-for="(item,index) in products" :key="index">
      <item :product="item"/>
    </div>
  </div>
</template>

<style scoped>
.container-2 {
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  cursor: pointer;
  overflow: scroll;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f5f5f5;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.container {
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap; /* 允许容器内的项目换行 */
  justify-content: space-between; /* 水平方向上的对齐方式 */
  align-items: stretch; /* 垂直方向上拉伸以填满容器 */
  align-content: flex-start; /* 当有多行时，设置行与行之间的对齐方式 */
  //gap: 10px; /* 设置项目之间的间距 */
}

item {
  flex: 1 0 calc(33.333% - 10px); /* flex-grow, flex-shrink, flex-basis */
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  background-color: #f9f9f9;
  transition: all 0.3s;
}

item:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>