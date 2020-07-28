<template>
  <div class="main-map">
    <el-amap vid="amapDemo" class="amap-demo"></el-amap>
  </div>
</template>

<script>
import { AMapManager,lazyAMapApiLoaderInstance } from 'vue-amap';
export default {
  name: "Amap",
  data(){
      return {
          zoom: 16
      }
  },
  mounted() {
    // 页面加载完成时 初始化地图
    lazyAMapApiLoaderInstance.load().then(()=>{
      this.map = new AMap.Map('amapDemo', {
        center: [121.074223,32.065946],
        zoom: this.zoom
      })
    }) 
  },
};
</script>

<style lang="scss">
    .main-map {
        height: 100vh;
    }
</style>