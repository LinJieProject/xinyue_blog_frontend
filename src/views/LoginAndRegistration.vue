<!-- 登录与注册页面 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="grid-content bg-purple-light">
          <el-main>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input name="username" v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input name="password" type="password" v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item>
                <!-- <button type="submit"></button> -->
                <el-button type="submit" @click="onSubmit">登录</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </div>
      </el-col>
    </el-row>
    <!-- 使用底栏组件 -->
    <Footer></Footer>
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
        username: "",
        password: ""
      }
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    loggg() {},
    onSubmit() {
      var opts = {
        method: "POST", //请求方法
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        // 请求体
        body: JSON.stringify({
          //post请求参数
          username: this.form.username,
          password: this.form.password
        })
      };
      fetch("http://127.0.0.1:9090/Login", opts)
        .then(response => {
          //你可以在这个时候将Promise对象转换成json对象:response.json()
          //转换成json对象后return，给下一步的.then处理
          // return response.text();
          return response.json();
        })
        .then(data => {
          this.$message(data.msg);
          // window.location.href = "/Home";
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style scoped>
</style>
