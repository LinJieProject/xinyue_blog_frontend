<!-- 登录与注册页面 -->
<template>
  <div>
    <!-- 外层容器 -->
    <el-container>
      <!-- 顶栏容器 -->
      <el-header  class="header-navmenu">
        <NavMenu></NavMenu>
        <!-- 使用导航栏组件 -->
      </el-header>
      <el-container>
        <!-- 主要区域容器 -->
        <el-main>
          <el-row>
          <el-col :span="8" :offset="8">
            <div class="grid-content bg-purple-light">
              <el-main>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="账号">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input type="password" v-model="form.pass"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </el-main>
            </div>
          </el-col>
        </el-row>
        </el-main>
        <!-- 底栏容器 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "LoginAndRegistration",
  components: {},
  props: {},
  data() {
    return {
      form: {
        name: "",
        pass: ""
      }
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
.header-navmenu{
  padding: 0;
}
</style>
