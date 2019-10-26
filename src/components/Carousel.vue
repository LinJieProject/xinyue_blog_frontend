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
           {id:1,src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572657881&di=adf51ec51b37e8d44827acefda9c2bb3&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.bbra.cn%2F%28S%28b1dvhz45pldyhk45buamhz45%29%29%2FUploadfiles%2Fimgs%2F2014%2F03%2F10%2Ffeng1%2FXbzs_018.jpg"},
           {id:2,src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572657775&di=717e66af76990bdce9ccdda67dfcfb98&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-06-21%2F5b2b5ffa46039.jpg"},
           {id:3,src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572063033488&di=2320707dd7f04c4ca6b2b63f34097dcc&imgtype=0&src=http%3A%2F%2Fnews.mydrivers.com%2FImg%2F20100603%2F06043685.jpg"},
           {id:4,src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572063114146&di=1600d15111029d79c75dce2bc36368c0&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1936214561%2C2282914546%26fm%3D214%26gp%3D0.jpg"},
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
