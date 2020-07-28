<template>
  <div class="main-map">
    <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-demo"></el-amap>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
      return {
          zoom: 16,
          center: [121.074223,32.065946]
      }
  }
};
</script>

<style lang="scss">
    .main-map {
        height: 100vh;
    }
</style>