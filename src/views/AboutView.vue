<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <iframe src="//player.bilibili.com/player.html?aid=897098469&bvid=BV1yA4y1d72F&cid=734525916&page=1" scrolling="yes" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="600"> </iframe> -->
  </div>
</template>
<script>
  export default {
    name: 'aboutview',
    components: {
    },
    data() {
      return {
      //   projects: [
      //   { title: '道路', createtime: '1st Jan 2019', finishtime: '1st Jan 2019', status: '数据预处理', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: '水体', createtime: '10th Jan 2019', finishtime: '10th Jan 2019', status: '模型训练', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: '建筑', createtime: '20th Dec 2018', finishtime: '20th Dec 2018', status: '模型测试', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: '植被', createtime: '20th Oct 2018', finishtime: '20th Oct 2018', status: '生成数据', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      // ]
      page: 1,
      projects: []
      }
    },
    created() {
      this.$http.get('/api/home/gettasks',{}).then((response) => {
                console.log(response);
                this.projects = response.data
      });
    },
    methods: {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1:1)
      }
    }
  }
</script>