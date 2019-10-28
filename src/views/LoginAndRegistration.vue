<!-- 登录与注册页面 -->
<template>
  <div>
    <!-- 使用导航栏组件 -->
    <NavMenu></NavMenu>
    <el-row>
      <el-col :span="8" :offset="8">
        <div class="grid-content bg-purple-light">
          <el-main>
            <el-form action="" method="POST" ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input name="username" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input name="password" type="password" v-model="form.pass"></el-input>
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
  methods: {
    loggg(){

    },
    onSubmit() {
      //将"key1=value1&key2=valu2" 形式封装整FromData形式
      let formData = new FormData();
      formData.append("username", "tom");
      formData.append("password", "123");
      console.log(formData);

      var opts = {
        method: "POST", //请求方法
        body: formData, //请求体
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        // body: {
        //   //post请求参数
        //   username: "Hubot",
        //   password: "hubot"
        // }
      };
      fetch("http://127.0.0.1:9090/Login", opts)
        .then(response => {
          //你可以在这个时候将Promise对象转换成json对象:response.json()
          //转换成json对象后return，给下一步的.then处理
          return response.text();
        })
        .then(responseText => {
          console.log(responseText);
          alert(responseText);
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
