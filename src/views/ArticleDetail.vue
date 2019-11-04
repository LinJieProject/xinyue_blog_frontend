<!-- 文章详细页面 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    <br />
    <div class="article-detail-div">
      <p class="article-detail-title">{{ articleDetail.title }}</p>
      <div class="article-info">
        <span>作者：{{ articleDetail.username}}</span>
        <span class="article-info-view-count">阅读：{{ articleDetail.view_count}}</span>
        <span>评论：{{ articleDetail.comment_count }}</span>
      </div>

      <div class="article-content" v-html="compiledMD"></div>
    </div>

    <!-- 使用底栏组件 -->
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import marked from "marked";
var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
export default {
  name: "ArticleDetail",
  components: {},
  props: {},
  data() {
    return {
      // articleDetail: {
      //   title: "",
      //   view_count: 0,
      //   comment_count: 0,
      //   username: "",
      //   summary: "",
      //   content: ""
      // },
      articleDetail:'',
    };
  },
  created() {
    // 变量“vm”存储该组件实例
    var vm = this;
    let url = "http://127.0.0.1:9090/Article/" + this.$route.params.id;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        vm.articleDetail = jsonData.data;
        // console.log(vm.articleDetail);
      });
  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {
    compiledMD: function() {
      return marked(this.articleDetail.Content, { sanitize: true });
    }
  },
  watch: {}
};
</script>

<style scoped>
.article-detail-div {
  margin: auto;
  padding: 24px;
  width: 60%;
  max-width: 750px;
  background-color: white;
}
.article-detail-title {
  font-size: 30px;
  font-weight: bolder;
}
.article-info {
  color: grey;
}
.article-info-view-count {
  margin: 0 30px;
}
.article-content {
  direction: ltr;
  text-align: left;
}
</style>
