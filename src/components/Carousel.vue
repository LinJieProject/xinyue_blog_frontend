<!-- 轮播图组件 -->
<template>
  <div>
<el-carousel type="card" height="200px">
      <el-carousel-item v-for="item in img_srcs" :key="item.id">
          <img src=item.src >
        <!-- <h3 class="small">{{ item }}</h3> -->
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
           {id:1,src:'../assets/imgs/图片01.jpg'},
           {id:2,src:'../assets/imgs/图片01.jpg'},
           {id:3,src:'../assets/imgs/图片01.jpg'},
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

</style>
