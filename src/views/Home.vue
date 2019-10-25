<!-- 首页 -->
<template>
  <div>
    <!-- 外层容器 -->
    <el-container>
      <!-- 顶栏容器 -->
      <el-header class="header-navmenu">
        <NavMenu></NavMenu><!-- 使用导航栏组件 -->
      </el-header>
      <el-container>
        <!-- 侧边栏容器 -->
        <!-- <el-aside width="200px">Aside</el-aside> -->
        <!-- 主要区域容器 -->
        <el-main><carousel></carousel></el-main>
        <!-- 底栏容器 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import NavMenu from '../components/NavMenu'
import Carousel from '../components/Carousel'
export default {
  name: "Home",
  components: {
    // NavMenu,
    Carousel,
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
.header-navmenu{
  padding: 0;
}
</style>
