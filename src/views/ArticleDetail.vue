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

      <div class="article-content" v-html="compiledMD" :class="{shi:true}"></div>
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
      articleDetail: ""
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
.article-content >>> h1 {
  /* color: red; */
}
.article-content >>> h2 {
  color: #ba3925;
}
.article-content >>> a {
  text-decoration:none;
  color: #0789e0;
  border-bottom: 1px solid #ddd;
}
.article-content >>> table {
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-collapse: collapse; /* 边框合并，默认边框分离 */
}
.article-content >>> table tr:nth-child(even) {
  background-color: #f4f3ec;
}
.article-content >>> table th {
  padding: 8px;
  border: 1px solid #d9d9d9;
}
.article-content >>> table td {
  padding: 8px;
  border: 1px solid #d9d9d9;
}

.article-content >>> p code {
  display: inline;
  margin: 0 5px;
  padding: 3px 5px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}
.article-content >>> pre {
  counter-reset:linenumber;

  padding: 1em 1.5em;
  white-space: pre;

  border: 1px solid #ddd;
  display: block;
  background: #f5f2f0;
  overflow: auto;
}
.article-content >>> pre code {
  counter-increment:section;
  /* content:"Section " counter(section) ". "; */

  display: inline-block;
  white-space: inherit;
}
</style>
