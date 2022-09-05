<template>
   <v-app>
    <div style="background-image: url('http://43.142.143.244/wp-content/uploads/2022/06/QQ图片20220617170317-1-scaled.jpg');">

    </div>
    <v-main>
      <router-view/>
    </v-main>
  <v-bottom-navigation
    v-model="bottomNav"
    shift
    class = "sucess"
  >
    <v-btn link to="/about">
      <span>Video</span>
      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn>
      <span>Music</span>
      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn link to="/book">
      <span>通讯录</span>
      <v-icon>mdi-book</v-icon>
    </v-btn>

    <v-btn link to="/home">
      <span >班级相册</span>
      <v-icon>mdi-image</v-icon>
    </v-btn>
  </v-bottom-navigation>
</v-app>
</div>
 
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: 3,
      }
    },

    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      },
    },
  }
</script>
