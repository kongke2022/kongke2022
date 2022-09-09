<template>
  <div>
  <div id="map"></div>
</div>
</template>

<script>
export default {
data() {
  return {
      map: ""
  };
},
mounted() {
  this.initDate();
},
methods: {
  initDate() {
    this.map = L.map("map", {
      center: [40.02404009136253, 116.50641060224784], // 地图中心
      zoom: 2, //缩放比列
      zoomControl: false, //禁用 + - 按钮
      doubleClickZoom: false, // 禁用双击放大
      attributionControl: false // 移除右下角leaflet标识
    });
    let name = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    ).addTo(this.map);
  //   this.map.removeLayer(name)  // 移除图层
  }
}
};
</script>

<style lang="stylus" scoped>
#map {
width: 100%;
height: calc(90vh);
z-index: 1;
}
</style>