<!-- 轮播图组件 -->
<template>
  <div>
<el-carousel type="card" height="300px">
      <el-carousel-item v-for="item in img_srcs" :key="item.id">
          <img :src="item.src" >
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
           {id:1,src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571825663619&di=84a68e81d6fcd3754ea89bac3996c787&imgtype=0&src=http%3A%2F%2Fnews.mydrivers.com%2Fimg%2F20120423%2F2012042308530117.jpg"},
           {id:2,src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571825663619&di=84a68e81d6fcd3754ea89bac3996c787&imgtype=0&src=http%3A%2F%2Fnews.mydrivers.com%2Fimg%2F20120423%2F2012042308530117.jpg"},
           {id:3,src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571825663619&di=84a68e81d6fcd3754ea89bac3996c787&imgtype=0&src=http%3A%2F%2Fnews.mydrivers.com%2Fimg%2F20120423%2F2012042308530117.jpg"},
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
