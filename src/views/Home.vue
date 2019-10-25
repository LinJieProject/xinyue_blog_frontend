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
      articles:[
        {id:1,title:"用 Git 作为聊天应用的后端",summary:"从去年实习到现在8月，工作大半年，正式工作前，也把自己那笨重的神州战神游戏本切换到了今天四月推出的华为 MateBook 14，3:2超薄体验"},
        {id:2,title:"用 Git 作为聊天应用的后端",summary:"从去年实习到现在8月，工作大半年，正式工作前，也把自己那笨重的神州战神游戏本切换到了今天四月推出的华为 MateBook 14，3:2超薄体验"},
        {id:3,title:"用 Git 作为聊天应用的后端",summary:"从去年实习到现在8月，工作大半年，正式工作前，也把自己那笨重的神州战神游戏本切换到了今天四月推出的华为 MateBook 14，3:2超薄体验"},
        {id:4,title:"用 Git 作为聊天应用的后端",summary:"从去年实习到现在8月，工作大半年，正式工作前，也把自己那笨重的神州战神游戏本切换到了今天四月推出的华为 MateBook 14，3:2超薄体验"},
      ]
    };
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
