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
    <!-- 评论区 -->
    <div class="comment-div">
      <div class="comment-publish">
        <div class="comment-publish-username">
          <!-- <span>{{ articleDetail.username }}</span><span>{{isLoginStatus}}</span> -->
          <span>{{ usernameOrTip }}</span>
        </div>
        <div class="comment-publish-edit">
          <textarea v-model="commentContent" placeholder="发表你的看法..."></textarea>
        </div>
      </div>
      <div class="comment-button">
        <el-button @click="publishComment" size="small" round>发布</el-button>
        <el-button @click="commentContent=''" size="small" round>取消</el-button>
      </div>
      <!-- 已发布的评论 -->
      <div class="comment-top">
        <span>全部评论</span>
      </div>
      <Comment v-for="comment in commentList" :key="comment.id" :comment="comment"></Comment>
    </div>

    <!-- 使用底栏组件 -->
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import Comment from "../components/Comment";
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
  components: {
    Comment
  },
  props: {},
  data() {
    return {
      articleDetail: "",
      commentList:[],
      commentContent:"",
    };
  },
  created() {
    // 变量“vm”存储该组件实例
    var vm = this;
    let url = "http://127.0.0.1:9090/api/v1/Article/" + this.$route.params.id;
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        vm.articleDetail = jsonData.data;
      });

    // 获取评论
    let url2 = "http://127.0.0.1:9090/api/v1/Comment/" + this.$route.params.id;
    fetch(url2)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        vm.commentList = jsonData.data;
      });
  },
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    // 发布评论方法
    publishComment(){
      // 检查
      if($cookies.get('isLogin')!="true"){
        this.$message({
          message: '请先登录！',
          type: 'warning'
        });
        return 
      }
      let contentStr=this.commentContent.trim();
      if (contentStr==""){
        this.$message({
          message: '不能发布空评论！',
          type: 'warning'
        });
        return 
      }
      // 发布操作
      var opts = {
        method: "POST", //请求方法
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        // 请求体
        body: JSON.stringify({
          //post请求参数
          username: $cookies.get("username"),
          content: this.commentContent,
          article_id:this.articleDetail.id,
        })
      };
      fetch("http://127.0.0.1:9090/api/v1/PublishComment", opts)
        .then(response => {
          //你可以在这个时候将Promise对象转换成json对象:response.json()
          //转换成json对象后return，给下一步的.then处理
          // return response.text();
          return response.json();
        })
        .then(data => {
          if (data.msg == "发布评论成功！") {
            this.updateComment();
            this.commentContent="";
            this.$message("发布评论成功！");
          } else {
            this.$message("发布评论失败！");
          }
        });
    },
    updateComment(){
      var vm = this;
      let url2 = "http://127.0.0.1:9090/api/v1/Comment/" + this.$route.params.id;
    fetch(url2)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        vm.commentList = jsonData.data;
      });
    }
  },
  filter: {},
  computed: {
    compiledMD: function() {
      return marked(this.articleDetail.Content, { sanitize: true });
    },
    usernameOrTip:function () {
      if($cookies.get('isLogin')=="true"){
        return $cookies.get("username");
      }else{
        return "未登录"
      }
    },
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
/* .article-content >>> h1 {
   color: red; 
} */
.article-content >>> h2 {
  color: #ba3925;
}
.article-content >>> a {
  text-decoration: none;
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
  counter-reset: linenumber;

  padding: 1em 1.5em;
  white-space: pre;

  border: 1px solid #ddd;
  display: block;
  background: #f5f2f0;
  overflow: auto;
}
.article-content >>> pre code {
  counter-increment: section;
  /* content:"Section " counter(section) ". "; */

  display: inline-block;
  white-space: inherit;
}
/* 评论区样式 */
.comment-div {
  margin: 20px auto;
  padding: 24px;
  width: 60%;
  max-width: 750px;
  background-color: white;
}
.comment-publish {
  margin-bottom: 10px;
  display: flex;
}
.comment-publish .comment-publish-username {
  /* 当box-sizing的值为border-box时，将采取怪异模式解析计算， */
  /* 此时 width = 内容区宽度 + padding + border */
  box-sizing: border-box;
  padding-right: 20px;
  width: 16%;
  font-size: 30px;
}
.comment-publish .comment-publish-edit {
  width: 84%;
}
.comment-publish .comment-publish-edit textarea {
  /* 当box-sizing的值为border-box时，将采取怪异模式解析计算， */
  /* 此时 width = 内容区宽度 + padding + border */
  box-sizing: border-box;
  padding: 12px 16px;
  width: 100%;
  height: 90px;
  font-size: 13px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fafafa;
  resize: none;
  display: inline-block;
  vertical-align: top;
  outline-style: none;
}
.comment-publish .comment-publish-edit textarea:focus {
  outline: none;
}
.comment-button {
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
}
.comment-top {
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 4px solid #ec7259;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
}
</style>
