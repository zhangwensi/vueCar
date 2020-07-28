import Vue from 'vue' 
import VueAMap from 'vue-amap'

Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
    key: '64fc0893beae02661a234205106550cd',
    plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
  });