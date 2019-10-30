<!-- 登录与注册页面 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    <br>
    <br>
    <br>
    <br>
    <el-row>
      <el-col :span="2" offset="10"><div :class="{default:true,active:isLoginMode}" @click="isLoginMode=true">登录</div></el-col>
      <el-col :span="2" ><div :class="{default:true,active:!isLoginMode}" @click="isLoginMode=false">注册</div></el-col>
      
      <el-col v-if="isLoginMode" :span="8" :offset="8">
        <div class="grid-content bg-purple-light">
          <el-main>
            <el-form ref="loginForm" :model="loginForm" label-width="80px">
              <el-form-item label="用户名">
                <el-input name="username" v-model="loginForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input name="password" type="password" v-model="loginForm.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="submit" @click="onSubmit">登录</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </div>
      </el-col>
      <el-col v-if="!isLoginMode" :span="8" :offset="8">
        <div class="grid-content bg-purple-light">
          <el-main>
            <el-form ref="registrationForm" :model="registrationForm" label-width="80px">
              <el-form-item label="用户名">
                <el-input type="text"  v-model="registrationForm.username" ></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input  type="password" v-model="registrationForm.password" autocomplete="new-password"></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input  type="password" v-model="registrationForm.password2"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="submit" @click="registrationSubmit">注册</el-button>
                <el-button >取消</el-button>
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
      loginForm: {
        username: "",
        password: "",
      },
      registrationForm:{
        username: "",
        password: "",
        password2: "",
      },
      isLoginMode:true,
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
          username: this.loginForm.username,
          password: this.loginForm.password
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
          if (data.msg == "登录成功！") {
            $cookies.set("isLogin", "true");
            let username = data.user.username;
            let gender = data.user.gender;
            let loginMsg = data.user.msg;
            $cookies.set("username", username);
            $cookies.set("gender", gender);
            $cookies.set("loginMsg", loginMsg);
            window.location.href = "/Home";
          } else {
            this.$message(data.msg);
          }
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
.default{
  font-size: 20px;
  line-height: 20px;
}
.active{
  font-size: 40px;
  color: #46a0fc;
}
</style>
