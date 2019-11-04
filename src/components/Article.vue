<!-- 文章组件 -->
<template>
  <div class="div-article">
    <el-row>
      <el-col offset="5" :span="14">
        <el-card>
          <div class="article-info">
            <div>
              <a :href="'/ArticleDetail/'+article.id">
                <p class="article-title">{{ article.title }}</p>
              </a>
              <p class="article-summary">{{ article.summary }}</p>
            </div>
            <div class="article-div">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="article-div-image"
              />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
  data() {
    return{
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: #333;
}
a:hover {
  text-decoration: underline;
}
.div-article {
  margin-bottom: 20px;
  border-bottom: 1px;
}
.article-info {
  display: flex;
  justify-content: space-between;
}
.article-title {
  margin-top: 0;
  text-align: left;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.article-summary {
  text-align: left;
  font-size: 14px;
  line-height: 24px;
  color: #999;
}
.article-div {
  margin-left: 20px;
}
.article-div-image {
  width: 150px;
  height: 100px;
}
</style>