<!-- 评论组件 -->
<template>
  <div class="comment">
    <div class="comment-username">
      <span><i class="el-icon-user"></i> {{ comment.username }}</span>
    </div>
    <div>
      <span><i class="el-icon-chat-square"></i> {{ comment.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  components: {},
  props: ["comment"],
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
.comment{
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    text-align: left;
}
.comment-username{
    font-size: 18px;
}
</style>
