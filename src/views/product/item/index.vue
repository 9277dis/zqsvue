<script>
import product from "@/views/product/index.vue";

export default {
  name: "index",
  components: {product},
  methods: {
    getProductImagePatn(id, picLastIndex) {
      {
        return require(`@/assets/products/${id}/${picLastIndex}.avif`)
      }
    },
    AddToCart() {

    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="item-container">
    <div class="img-container">
      <img :src="getProductImagePatn(product.id,product.picLastIndex)" alt="">
    </div>
    <div class="info">
      <div class="title" v-text="product.name"></div>
      <!--      <div class="desc">5G全网通 骁龙865 120Hz高刷屏 4800万超广角三摄 30W快充</div>-->
    </div>
    <div class="price-container">
      <div class="price">
        <span>&yen;</span>
        <span class="price-span">{{ product.price }}</span>
      </div>
      <div class="cart">
        <button class="btn btn-primary" @click.stop="AddToCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.item-container {
  margin-top: 15px;
  width: 300px;
  max-height: 480px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.item-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 5px #ccc;
}

.item-container img {
  width: 100%;
  height: auto;
  max-height: 250px;
  margin: 0 auto;
  border-radius: 10px;
}

.info {
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}


.price {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.price-span {
  font-size: 24px;
  font-weight: bold;
  margin-right: 4px;
}

.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: auto;
}

.cart:hover {
  background-color: var(--primary-color);
  color: white;
}

.btn {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  color: #333;
  background: rgba(197, 197, 197, 0.9);
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
}

.btn:hover {
  background-color: var(--primary-color);
  color: #fff;
}
</style>