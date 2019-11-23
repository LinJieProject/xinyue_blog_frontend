<!-- 回到顶部组件 -->
<template>
  <div class="backtop-div">
    <a href="#top" class="backtop">
      <i class="el-icon-arrow-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "Backtop",
  components: {},
  props: {},
  data() {
    return {};
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
.backtop-div {
  position: fixed;
  right: 40px;
  bottom: 40px;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
.backtop-div:hover {
  background-color: #edf5ff;
}
.backtop {
  color: #46a0fc;
}
</style>
