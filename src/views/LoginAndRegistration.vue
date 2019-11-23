<!-- 登录与注册页面 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    
    <div class="height">

    </div>
    <el-row>
      <el-col :span="2" offset="10">
        <div :class="{default:true,active:isLoginMode}" @click="isLoginMode=true">登录</div>
      </el-col>
      <el-col :span="2">
        <div :class="{default:true,active:!isLoginMode}" @click="isLoginMode=false">注册</div>
      </el-col>

      <!-- 登录表单 -->
      <el-col v-if="isLoginMode" :span="8" :offset="8">
        <div class="grid-content bg-purple-light">
          <el-main>
            <el-form ref="loginForm" :model="loginForm" label-width="80px">
              <el-form-item label="用户名">
                <el-input name="username" v-model="loginForm.username"></el-input>
                <!-- 验证消息 -->
                <p :class="{hidden:loginUsernameNotEmpty}" class="checkMsg">用户名不可为空！</p>
              </el-form-item>
              <el-form-item label="密码">
                <el-input name="password" type="password" v-model="loginForm.password"></el-input>
                <!-- 验证消息 -->
                <p :class="{hidden:loginPasswordNotEmpty}" class="checkMsg">密码不可为空！</p>
              </el-form-item>
              <el-form-item>
                <el-button :disabled="!isLoginPass" type="submit" @click="loginSubmit">登录</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </div>
      </el-col>
      <!-- 注册表单 -->
      <el-col v-if="!isLoginMode" :span="8" :offset="8">
        <div class="grid-content bg-purple-light">
          <el-main>
            <el-form ref="registrationForm" :model="registrationForm" label-width="80px">
              <el-form-item label="用户名">
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="提交的用户名会自动忽略其中的空格！"
                  placement="right"
                >
                  <el-input type="text" v-model="registrationForm.username" autocomplete="off"></el-input>
                </el-tooltip>
                <!-- 验证消息 -->
                <p :class="{hidden:registrationUsernameNotEmpty}" class="checkMsg">用户名不可为空！</p>
              </el-form-item>
              <el-form-item label="密码">
                <el-tooltip class="item" effect="dark" content="提交的密码会自动忽略其中的空格！" placement="right">
                  <el-input
                    type="password"
                    name="password"
                    v-model="registrationForm.password"
                    autocomplete="new-password"
                  ></el-input>
                </el-tooltip>
                <!-- 验证消息 -->
                <p :class="{hidden:registrationPasswordNotEmpty}" class="checkMsg">密码不可为空！</p>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-tooltip class="item" effect="dark" content="提交的密码会自动忽略其中的空格！" placement="right">
                  <el-input
                    type="password"
                    name="checkPass"
                    v-model="registrationForm.checkPass"
                    autocomplete="new-password"
                  ></el-input>
                </el-tooltip>
                <!-- 验证消息 -->
                <p :class="{hidden:registrationPasswordPass}" class="checkMsg">请输入确认密码，且两次输入的密码需一致！</p>
              </el-form-item>
              <el-form-item>
                <el-button :disabled="!isRegistrationPass" type="submit" @click="registrationSubmit">注册</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </div>
      </el-col>
    </el-row>
    <div class="footer-div">
    <!-- 使用底栏组件 -->
    <Footer></Footer>

    </div>
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
        password: ""
      },
      registrationForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      isLoginMode: true,
      loginFormCheck: {
        isUsernamePass: false,
        isPasswordPass: false
      },
      registrationCheck: {
        isUsernamePass: false,
        isPasswordPass: false,
        isCheckPass: false
      }
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {
    loginSubmit() {
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
      fetch("http://127.0.0.1:9090/api/v1/Login", opts)
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
            $cookies.set("username", username);
            $cookies.set("gender", gender);
            window.location.href = "/Home";
          } else {
            this.$message(data.msg);
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    registrationSubmit() {
      var opts = {
        method: "POST", //请求方法
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        // 请求体
        body: JSON.stringify({
          //post请求参数
          username: this.registrationForm.username,
          password: this.registrationForm.password,
          checkPass: this.registrationForm.checkPass
        })
      };
      fetch("http://127.0.0.1:9090/api/v1/Register", opts)
        .then(response => {
          //你可以在这个时候将Promise对象转换成json对象:response.json()
          //转换成json对象后return，给下一步的.then处理
          // return response.text();
          return response.json();
        })
        .then(data => {
          if (data.msg == "注册成功！") {
            $cookies.set("isLogin", "true");
            let username = data.user.username;
            let gender = data.user.gender;
            $cookies.set("username", username);
            $cookies.set("gender", gender);
            window.location.href = "/Home";
          } else {
            this.$message(data.msg);
          }
        })
        .catch(error => {
          alert(error);
        });
    },
    // 重置表单方法
    resetForm() {
      this.loginForm.username = "";
      this.loginForm.password = "";
      this.registrationForm.username = "";
      this.registrationForm.password = "";
      this.registrationForm.checkPass = "";
    }
  },
  filter: {},
  computed: {
    // 验证登录表单用户名不为空
    loginUsernameNotEmpty: function() {
      if (this.loginForm.username == "") {
        this.loginFormCheck.isUsernamePass = false;
        return false;
      } else {
        this.loginFormCheck.isUsernamePass = true;
        return true;
      }
    },
    // 验证登录表单密码不为空
    loginPasswordNotEmpty: function() {
      if (this.loginForm.password == "") {
        this.loginFormCheck.isPasswordPass = false;
        return false;
      } else {
        this.loginFormCheck.isPasswordPass = true;
        return true;
      }
    },
    // 是否允许做登录操作
    isLoginPass: function() {
      if (
        this.loginFormCheck.isUsernamePass == true &&
        this.loginFormCheck.isPasswordPass == true
      ) {
        return true;
      } else {
        return false;
      }
    },
    // 验证注册表单用户名不为空
    registrationUsernameNotEmpty: function() {
      if (this.registrationForm.username == "") {
        this.registrationCheck.isUsernamePass = false;
        return false;
      } else {
        this.registrationCheck.isUsernamePass = true;
        return true;
      }
    },
    // 验证注册表单密码不为空
    registrationPasswordNotEmpty: function() {
      if (this.registrationForm.password == "") {
        this.registrationCheck.isPasswordPass = false;
        return false;
      } else {
        this.registrationCheck.isPasswordPass = true;
        return true;
      }
    },
    // 验证注册表单二次输入的密码不为空，且两次输入的密码是否一致
    registrationPasswordPass: function() {
      if (
        this.registrationForm.checkPass == "" ||
        this.registrationForm.password != this.registrationForm.checkPass
      ) {
        this.registrationCheck.isCheckPass = false;
        return false;
      } else {
        this.registrationCheck.isCheckPass = true;
        return true;
      }
    },
    // 是否允许做注册操作
    isRegistrationPass: function() {
      if (
        this.registrationCheck.isUsernamePass == true &&
        (this.registrationCheck.isPasswordPass == true) &&
          (this.registrationCheck.isCheckPass == true)
      ) {
        return true;
      } else {
        false;
      }
    }
  },
  watch: {}
};
</script>

<style scoped>
.height{
  height: 200px;
}
.default {
  font-size: 20px;
  line-height: 20px;
}
.active {
  font-size: 40px;
  color: #46a0fc;
}
.checkMsg {
  text-align: left;
  line-height: 10px;
  font-size: 10px;
  color: red;
}
.hidden {
  visibility: hidden;
}
.footer-div{
  width: 100%;
  position: fixed;
  bottom: 0px;
}
</style>
