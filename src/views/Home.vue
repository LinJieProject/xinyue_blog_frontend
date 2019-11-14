<!-- 首页 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    <!-- 使用轮播图组件 -->
    <carousel></carousel>
    <!-- 使用文章组件 -->
    <Article v-for="article in articles" :key="article.id" :article="article"></Article>
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
    return {
      articles: []
    };
  },
  created() {
    // 变量“vm”存储该组件实例
    var vm=this
    fetch("http://127.0.0.1:9090/api/v1/Article")
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        vm.articles = jsonData.data;
        // console.log(vm.articles);
      });
  },
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
