<template>
  <div>
    <div class="danmu">
          <vue-danmaku :danmus="danmus" style="height: 80px; width: 2000px;" loop :isSuspend= "isSuspend" ref="danmucomponent" ></vue-danmaku>
    </div>
    <!-- <v-chip
      class="ma-2"
      color="primary"
    >
      {{tag}}
    </v-chip> -->
   <v-carousel hide-delimiters @change="updateinfo" height="520px">
    <v-carousel-item
      v-for="(url,i) in imgurlarray"
      :key="i"
      :src="url"
    ></v-carousel-item>
  </v-carousel>
  <div class = "white">
     <v-text-field v-model="shotdanmu" hint="正在上膛" label="发个弹幕记录一下" :value="danmucontent"></v-text-field>
     <v-btn block :loading="loadingstate" color="primary" @click="shot()">shot</v-btn>
  </div>
  </div>
</template>
<style>

</style>
<script>
import vueDanmaku from 'vue-danmaku'

export default {
  components: {
    vueDanmaku,
  },
  data() {
    return {
      shotdanmu : "",
      danmus: [],
      danmuraw: [],
      isSuspend: true,
      imgurlarray: [],
      imgInfo: [],
      tag: "",
      danmucontent: "",
      loadingstate: false,
    }
  },
  mounted() {
      this.$http.post('http://121.4.138.96/home/getdanmus',"tag=" + this.tag).then((response) => {
                console.log(response);
                this.danmuraw = response.data
                for(let i = 0 ; i < response.data.length; i++)
                {
                  this.danmus.push(this.danmuraw[i].content)
                  console.log(this.danmuraw[i].content)
                }
                console.log(this.danmus)
      });
      this.$http.get('http://121.4.138.96/home/getimgurlarray',{}).then((response) => {
                console.log(response);  
                this.imgInfo = response.data
                for(let i = 0 ; i < response.data.length; i++)
                {
                  this.imgurlarray.push(response.data[i].imgurl)
                  console.log(response.data[i].imgurl)
                }
                console.log(this.imgurlarray)
                this.tag = response.data[0].tag              
      });
  },
  methods: {
    shot() {
        this.$http.post('http://121.4.138.96/home/shotdanmu',"danmu="+this.shotdanmu+"&tag="+this.tag).then((response) => {
                //console.log(response);
                this.$http.post('http://121.4.138.96/home/getdanmus',"tag=" + this.tag).then((response) => {
                //console.log(response);
                this.danmuraw = response.data
                for(let i = 0 ; i < response.data.length; i++)
                {
                  this.danmus.push(this.danmuraw[i].content)
                  console.log(this.danmuraw[i].content)
                }
                //console.log(this.danmus)
                this.danmucontent = ""
                this.loadingstate = !this.loadingstate
                setTimeout(() => (this.loadingstate = !this.loadingstate), 1000)
      });
        });
      },
      updateinfo(number) {
        console.log(number);
        this.tag = this.imgInfo[number].tag;
        this.$http.post('http://121.4.138.96/home/getdanmus',"tag=" + this.tag).then((response) => {
                console.log(response);
                this.danmuraw = response.data
                this.danmus = [];
                for(let i = 0 ; i < response.data.length; i++)
                {
                  this.danmus.push(this.danmuraw[i].content)
                  console.log(this.danmuraw[i].content)
                }
                console.log(this.danmus)
                
      });
      //this.refName.play();
      //this.$refs.play();
      this.$refs.danmucomponent.play();
      console.log(this.$refs)
      }
  }
}
</script>
