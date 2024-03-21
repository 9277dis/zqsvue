<script>
export default {
  name: "item"
}
</script>

<template>
  <div class="item-container">
    <div class="img-container">
      <img src="https://q1.qlogo.cn/g?b=qq&nk=239277023&s=640" alt="">
    </div>
    <div class="info">
      <div class="title">Apple iPhone 12 (A2604) 128GB 黑色 支持移动联通电信5G 双卡双待手机</div>
      <div class="desc">5G全网通 骁龙865 120Hz高刷屏 4800万超广角三摄 30W快充</div>
    </div>
    <div class="price">
      <span>&yen;</span>
      <span class="price-span">13888.00</span>
    </div>
    <div class="cart">
      <button class="btn btn-primary">加入购物车</button>
    </div>
  </div>
</template>

<style scoped>
.item-container {
  margin-top: 10px;
  width: 256px;
  height: 470px;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;
  padding: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px #ccc;
  }
}

.item-container img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
}

.info {
  margin-bottom: 4px;
}

.title {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
}

.desc {
  margin-bottom: 10px;
  color: #545353;
}

.price {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.price-span {
  font-size: 24px;
  font-weight: bold;
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

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
}

.btn {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
}
</style>