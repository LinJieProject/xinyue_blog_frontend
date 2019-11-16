<!-- 编辑文章页面 -->
<template>
  <div>
    <el-row>
      <!-- 编辑 -->
      <el-col class="edit" :span="12">
        <div class="edit-title-div">
          <input class="edit-title-input" type="text" v-model="aticle.title" placeholder="请输入标题" />
        </div>
        <!-- 功能区 -->
        <div class="function">
          <div class="function-left">
            <el-button size="mini" icon="el-icon-house" @click="goHome" round>回首页</el-button>
          </div>
          <div class="function-right">
            <!-- <el-button size="mini" icon="el-icon-upload" round>保存到云</el-button> -->
            <el-button
              size="mini"
              icon="el-icon-s-promotion"
              @click="dialogVisible = true"
              :disabled="!allowPublish"
              round
            >发布文章</el-button>
          </div>
        </div>
        <div class="edit-content-div">
          <textarea
            v-model="aticle.content"
            class="edit-content"
            name="editing-articles"
            placeholder="请使用markdown语法编辑"
          ></textarea>
        </div>
      </el-col>
      <!-- 预览 -->
      <el-col class="preview" :span="12">
        <div class="preview-div">
          <div class="preview-title-div">{{ aticle.title }}</div>
          <div class="preview-content-div" v-html="compiledMD"></div>
        </div>
      </el-col>
    </el-row>
    <!-- 填写文章摘要的对话框 -->
    <el-dialog
      title="请填写文章摘要"
      :visible.sync="dialogVisible"
    >
      <el-form :model="aticle">
    <el-form-item label="文章摘要" >
      <el-input type="textarea" v-model="aticle.summary" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false;publishArticle()">确 定 发 布</el-button>
      </span>
    </el-dialog>
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
  name: "EditingArticles",
  components: {},
  props: {},
  data() {
    return {
      aticle: {
        title: "",
        content: "",
        summary:"",
      },
      dialogVisible: false /* 用于控制文章摘要对话框 */
    };
  },
   beforeCreate(){
    //  如果未登录，则跳转登录页
    let isLogin= $cookies.get('isLogin');
    if(isLogin!='true'){
      this.$message({message:"请先登录！",type:'warning'});
      setTimeout(function(){window.location.href = "/LoginAndRegistration";},2000);
    }
   },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    goHome() {
      window.location.href = "/Home";
    },
    // 发布文章方法
    publishArticle() {
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
          title: this.aticle.title,
          content: this.aticle.content,
          summary:this.aticle.summary,
        })
      };
      fetch("http://127.0.0.1:9090/api/v1/PublishArticle", opts)
        .then(response => {
          //你可以在这个时候将Promise对象转换成json对象:response.json()
          //转换成json对象后return，给下一步的.then处理
          // return response.text();
          return response.json();
        })
        .then(data => {
          if (data.msg == "发布成功！") {
            this.$message("发布成功！");
          } else {
            this.$message("发布失败！");
          }
        });
      // .catch(error => {
      //   alert(error);
      // });
    },
  },
  filter: {},
  computed: {
    compiledMD: function() {
      return marked(this.aticle.content, { sanitize: true });
    },
    // 检查是否允许发布文章
    allowPublish: function(params) {
      let titleStr = this.aticle.title.trim();
      let contentStr = this.aticle.content.trim();
      if (titleStr == "" || contentStr == "") {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {}
};
</script>

<style scoped>
.edit {
  /* background-color: grey; */
  height: 100vh;
  border-left: gray solid 1px;
  border-right: gray solid 1px;
}
.preview {
  background-color: white;
  height: 100vh;
}
.go-home-div {
  margin: 10px 2px;
  background-color: red;
}
/* 功能区样式 */
.function {
  padding: 0px 10px;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
}
/* 文章编辑区样式 */
.edit-title-div {
  height: 6vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-title-input {
  padding: 6px;
  width: 90%;
  border-style: none;
  font-size: 30px;
  font-weight: bolder;
}
.edit-title-input:focus {
  outline: none;
}
.edit-content-div {
  width: 100%;
  height: 90vh;
}
.edit-content {
  /* 当box-sizing的值为border-box时，将采取怪异模式解析计算， */
  /* 此时 width = 内容区宽度 + padding + border */
  box-sizing: border-box;
  padding: 30px 30px 60px 30px;
  width: 100%;
  height: 100%;
  border-style: none;
  resize: none;
  font-size: 16px;
  overflow: auto;
}
.edit-content:focus {
  outline: none;
}
/* 文章渲染样式 */
.preview-div {
  /* 当box-sizing的值为border-box时，将采取怪异模式解析计算， */
  /* 此时 width = 内容区宽度 + padding + border */
  box-sizing: border-box;
  padding: 30px 30px 60px 30px;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.preview-title-div {
  font-size: 30px;
  font-weight: bolder;
}

.preview-content-div {
  width: 100%;
  height: 100%;
  direction: ltr;
  text-align: left;
}
.preview-content-div >>> h2 {
  color: #ba3925;
}
.preview-content-div >>> a {
  text-decoration: none;
  color: #0789e0;
  border-bottom: 1px solid #ddd;
}
.preview-content-div >>> table {
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-collapse: collapse; /* 边框合并，默认边框分离 */
}
.preview-content-div >>> table tr:nth-child(even) {
  background-color: #f4f3ec;
}
.preview-content-div >>> table th {
  padding: 8px;
  border: 1px solid #d9d9d9;
}
.preview-content-div >>> table td {
  padding: 8px;
  border: 1px solid #d9d9d9;
}

.preview-content-div >>> p code {
  display: inline;
  margin: 0 5px;
  padding: 3px 5px;
  border: 1px solid #ddd;
  background-color: #f8f8f8;
}
.preview-content-div >>> pre {
  counter-reset: linenumber;

  padding: 1em 1.5em;
  white-space: pre;

  border: 1px solid #ddd;
  display: block;
  background: #f5f2f0;
  overflow: auto;
}
.preview-content-div >>> pre code {
  counter-increment: section;
  /* content:"Section " counter(section) ". "; */

  display: inline-block;
  white-space: inherit;
}
</style>
