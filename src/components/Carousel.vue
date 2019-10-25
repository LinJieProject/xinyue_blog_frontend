<!-- 轮播图组件 -->
<template>
  <div>
<el-carousel type="card" height="300px">
      <el-carousel-item v-for="item in img_srcs" :key="item.id">
          <img class="carousel-img" :src="item.src" >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name:"carousel",
  components: {},
  props: {},
  data() {
    return {
       img_srcs:[
           {id:1,src:"https://img.ivsky.com/img/bizhi/pre/201908/05/shuicaihua-001.jpg"},
           {id:2,src:"https://img.ivsky.com/img/bizhi/pre/201909/02/bing-114.jpg"},
           {id:3,src:"https://img.ivsky.com/img/bizhi/pre/201909/02/bing-127.jpg"},
           {id:4,src:"https://img.ivsky.com/img/bizhi/pre/201909/02/bing-117.jpg"},
       ]
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {

  },
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.carousel-img{
  width: 800px;
}
</style>
