<!-- 导航菜单组件 -->
<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">心阅博客</el-menu-item>
      <el-menu-item index="2">
        <a href="/Home" >首页</a>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">我的</template>
        <el-menu-item index="2-1">我的主页</el-menu-item>
        <el-menu-item index="2-2">我的关注</el-menu-item>
        <el-menu-item index="2-3">我的收藏</el-menu-item>
        <el-menu-item index="2-4">我的发布</el-menu-item>
        <el-menu-item index="2-5">我的评论</el-menu-item>
        <el-submenu index="2-6">
          <template slot="title">设置</template>
          <el-menu-item index="2-6-1">个人信息管理</el-menu-item>
          <el-menu-item index="2-6-2">黑名单管理</el-menu-item>
          <el-menu-item index="2-6-3">账户管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="2-7">退出登录</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <el-input placeholder="搜索文章" v-model="input_search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-menu-item>
      <el-menu-item index="5"><el-button type="primary">搜索</el-button></el-menu-item>
    
      <el-menu-item index="6"><el-button type="primary" plain>
        <a href="/LoginAndRegistration">登录 / 注册</a></el-button></el-menu-item>
      <el-menu-item index="10">
        <el-button class="el-icon-edit" type="danger" round>写文章</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navmenu",
  components: {},
  props: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input_search: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>
