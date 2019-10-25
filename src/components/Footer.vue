<!-- 底栏组件 -->
<template>
  <div class="footer">
      <el-row>
          <el-col offset="10" :span="4">© 2019 心阅博客 </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:"Footer",
};
</script>

<style>
.footer{
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: white;
}
</style>