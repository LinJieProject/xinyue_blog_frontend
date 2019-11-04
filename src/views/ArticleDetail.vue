<!-- 文章详细页面 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    <br />
    <div class="article-detail-div">
      <p class="article-detail-title">2018年被评为经典的5个实用小程序，关键时候帮你大忙了解一下！</p>
      <div class="article-info">
        <span>作者：tom</span>
        <span class="article-info-view-count">阅读：234</span>
        <span>评论：14</span>
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
      content: `
# 常用英语
## 颜色
序号 | 词/句 | 释义 | 其他说明
--- | --- | --- | ---
01 | color | 颜色 | colour（英式写法）
02 | blue | 蓝色 | 
03 | white | 白色 |
04 | green | 绿色 |
05 | red | 红色 | 
06 | grey | 灰色 | 
07 | black | 黑色 | 
08 | yellow | 黄色 | 
09 | orange | 橙色，橘色 | 
10 | brown | 褐色，棕色 | 

## 服饰箱包

序号 | 词/句 | 释义 | 其他说明
--- | --- | --- | ---
01 | handbag | 女士手提包 | 
02 | coat | 长外套，大衣 | 
03 | dress | 连衣裙 | 
04 | skirt | 短裙 | 
05 | shirt | 男士衬衫 | 
06 | blouse | 女士衬衫 | 
07 | suit | 一套衣服 | 
08 | tie | 领带 | 
09 | hat | 帽子 | 
10 | case | 箱子 | 

## 动物
序号 | 词/句 | 释义 | 其他说明
--- | --- | --- | ---
01 | dog | 狗 | 
02 | cat | 猫 | `
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {
    compiledMD: function() {
      return marked(this.content, { sanitize: true });
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
