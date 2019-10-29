<!-- 导航菜单组件 -->
<template>
  <div class="navmenu">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#24292e"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">心阅博客</el-menu-item>
      <el-menu-item @click="gotoHome" index="2">首页</el-menu-item>
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
      <el-menu-item class="el-menu-item-search" index="4">
        <el-input placeholder="搜索文章" v-model="input_search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-menu-item>
      <el-menu-item class="el-menu-item-search-button" index="4">
        <el-button type="primary">搜索</el-button>
      </el-menu-item>

      <el-menu-item class="el-menu-item-right" index="10">
        <el-button class="el-icon-edit" type="danger" round>写文章</el-button>
      </el-menu-item>
      <el-menu-item v-if="!isLoginCookie" @click="gotoLoginAndRegistration" class="el-menu-item-right" index="7">
        <el-button  type="primary" plain>登录 / 注册</el-button>
      </el-menu-item>
      <el-menu-item v-if="isLoginCookie" class="el-menu-item-right" index="6">
        <span>欢迎登录，用户：{{ usernameCookie }}</span>
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
      input_search: "",
      usernameCookie:$cookies.get("username"),
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    gotoHome() {
      window.location.href = "/Home";
    },
    gotoLoginAndRegistration() {
      window.location.href = "/LoginAndRegistration";
    }
  },
  filter: {},
  computed: {
    isLoginCookie: function() {
      if ($cookies.get("isLogin") == "true") {
        return true;
      }
    }
    },
  watch: {}
};
</script>

<style scoped>
.el-menu-item-search {
  margin-left: 3em;
}
.el-menu-item-search-button {
  padding-left: 0;
}
.el-menu-item-right {
  float: right;
}
</style>
