<!-- 首页 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    <!-- 使用轮播图组件 -->
    <carousel></carousel>
    <!-- 使用底栏组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
// import NavMenu from '../components/NavMenu'
import Carousel from "../components/Carousel";
export default {
  name: "Home",
  components: {
    // NavMenu,
    Carousel
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>
