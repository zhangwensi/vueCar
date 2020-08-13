<template>
  <div>
    <!-- <Cars /> -->
    <Map />
    <div id="users-view" :class="{open:show}">
      <router-view />
    </div>
    <MapNavbar />
  </div>
</template>

<script>
import Map from "../amap/Amap";
import Cars from "../cars/Cars";
import MapNavbar from "@c/navbar/MapNavbar.vue";
export default {
  name: "Index",
  components: { Map, Cars, MapNavbar },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    show() {
      const routeName = this.$route.name;
      return routeName === "Home" ? false : true;
    }
  },
  watch: {},
  mounted() {
    // 页面加载完成时，需要判断点击位置来确认是否显示用户列表页面
    document.addEventListener("mouseup", e => {
      const userLab = document.getElementById("users-view");
      if (userLab) {
        if (!userLab.contains(e.target)) {
          console.log('2222')
          this.$router.push({
            name: "Home"
          });
        }
      }
    });
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
  @include webkit (transition,all 0.3s ease);
  @include webkit (box-shadow,-5px 0 38px 0 rgba(0,0,0,0.4));
  &.open {
    right: 0px;
  }
}
</style>