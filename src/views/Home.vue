<!-- 首页 -->
<template>
  <div>
    <!-- 外层容器 -->
    <el-container>
      <!-- 顶栏容器 -->
      <el-header>
        <NavMenu></NavMenu>
      </el-header>
      <el-container>
        <!-- 侧边栏容器 -->
        <el-aside width="200px">Aside</el-aside>
        <!-- 主要区域容器 -->
        <el-main>Main</el-main>
        <!-- 底栏容器 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import NavMenu from '../components/NavMenu'
export default {
  name: "Home",
  components: {
    // NavMenu
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
