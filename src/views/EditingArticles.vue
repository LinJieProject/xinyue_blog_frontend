<!-- 编辑文章页面 -->
<template>
  <div>
    <el-row>
      <el-col class="list" :span="4">
        <div class="go-home-div">
          <el-button icon="el-icon-house" @click="goHome" round>回到首页</el-button>
        </div>
        <div>
          <el-button icon="el-icon-circle-plus-outline" type="primary" plain>新建文章</el-button>
        </div>
      </el-col>
      <el-col class="edit" :span="10">
        <div class="edit-title-div">
            <input type="text" v-model="aticle.title" placeholder="请输入标题">
        </div>
        <div class="edit-content-div">
          <textarea v-model="aticle.content" class="edit-content" name="editing-articles" placeholder="请使用markdown语法编辑"></textarea>
        </div>
      </el-col>
      <el-col class="preview" :span="10">
          <div class="preview-title-div">{{ aticle.title }}</div>
          <div class="preview-content-div" v-html="compiledMD"></div>
      </el-col>
    </el-row>
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
        aticle:{
            title:"",
            content:""
        }
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
      goHome(){
        window.location.href = "/Home";
      }
  },
  filter: {},
  computed: {
      compiledMD: function() {
      return marked(this.aticle.content, { sanitize: true });
    }
  },
  watch: {}
};
</script>

<style scoped>
.list {
  background-color: #99a9bf;
  height: 100vh;
}
.edit {
  background-color: grey;
  height: 100vh;
}
.preview {
  background-color: #d3dce6;
  height: 100vh;
}
.go-home-div {
  margin: 10px 2px;
  background-color: red;
}
.edit-title-div{
    width: 100%;
    height: 6vh;
}
.edit-content-div {
  border-color: #000;
  width: 100%;
  height: 94vh;
}
.edit-content{
    width: 100%;
    height: 100%;
}
</style>
