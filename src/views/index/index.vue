<template>
  <div>
    <Cars />
    <Map />
    <div id="users-view" :class="[ isShow ? 'open' : '']">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from '../amap/Amap'
import Cars from '../cars/Cars'
export default {
  name: "Index",
  components: {Map,Cars},
  data(){
    return {
      isShow: false
    }
  },
  watch: {
    "$route": {
      handler(newValue){
        const routeName = newValue.name
        this.isShow = routeName === "Home" ? false : true
      }
    }
  }
};
</script>

<style lang="scss">
#users-view {
  position: fixed;
  top: 0;
  right: -600px;
  bottom: 0;
  background-color: #34393f;
  width: 410px;
  z-index: 101;
  transition: all .3s ease;
  &.open {
    right: 0px;
  }
}
</style>