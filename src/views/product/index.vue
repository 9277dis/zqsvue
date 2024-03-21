<script>

import item from "@/views/product/item/index.vue";

export default {
  name: "index",
  components: {item},
  methods: {
    toDetail() {
      this.$router.push('/detail')
    }
  }
}
</script>

<template>
  <div class="container">
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
    <div @click="toDetail">
      <item/>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto 0;
  cursor: pointer;
}
</style>