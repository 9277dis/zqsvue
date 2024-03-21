<script>
export default {
  name: "index"
}
</script>

<template>
  <div class="container">
    <div class="img-container">
      <div class="big">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="small">
        <div><img src="@/assets/logo.png" alt=""></div>
        <div class="active"><img src="@/assets/logo.png" alt=""></div>
        <div><img src="@/assets/logo.png" alt=""></div>
        <div><img src="@/assets/logo.png" alt=""></div>
        <div><img src="@/assets/logo.png" alt=""></div>
      </div>
    </div>
    <div class="info-container">
      <h3>Apple/苹果iPhone15(A3092)
        256GB黑色支持移动联通电信5G双卡双待手机</h3>
      <div class="price">
        ¥<span class="price-num">6653.00</span>
      </div>
      <div>
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="mt20">
        <button class="btn btn-primary">加入购物车</button>
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
  margin-top: 20px;
}

.price {
  font-size: 1.4rem;
  color: var(--primary-color);
  font-weight: bold;
}

.price-num {
  font-size: 1.8rem;
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
.container{
  width: 80%;
  margin: 40px auto 0;
}
.img-container{
  display: inline-block;
  width: 33%;
  height: 200px;
}
.info-container{
  display: inline-block;
  width: 60%;
  height: 200px;
  vertical-align: top;
  padding-left: 45px;
}
.info-container h3{
  margin-top: 0;
}
.big img{
  width: 100%;
}
.btn{
  border: 1px solid white;
}
.btn:nth-child(1){
  border: 1px solid black;
}
.btn:hover{
  background-color: var(--from-color);
  color: white;
  border: 1px solid black;
}
</style>