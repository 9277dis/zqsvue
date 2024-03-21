<script>

import navbar from '@/views/navbar'
import product from "@/views/product";

export default {
  components: {navbar, product}
}
</script>

<template>
  <div>
    <navbar/>
    <router-view/>
    <product/>
    <router-view/>
  </div>
</template>

<style scoped>

</style>