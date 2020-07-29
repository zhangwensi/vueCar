<template>
  <div>
    <Cars />
    <Map />
    <div id="users-view" :class="{open:show}">
      <router-view />
    </div>
    <MapNavbar />
  </div>
</template>

<script>
import Map from '../amap/Amap'
import Cars from '../cars/Cars'
import MapNavbar from '@c/navbar/MapNavbar.vue'
export default {
  name: "Index",
  components: {Map,Cars,MapNavbar},
  data(){
    return {
      isShow: false
    }
  },
  computed: {
    show() {
      const routeName = this.$route.name
      return routeName === 'Home' ? false : true
    }
  },
  watch: {}
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