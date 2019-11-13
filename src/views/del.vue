<template>
  <div style="display:inline-block">
    <el-button  type="danger" @click="del">删除</el-button>
  </div>
</template>

<script>
import API from "../common/js/API";
export default {
  methods: {
    del() {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            this.$emit("del",this.id)
        })
    }
  },
  props: ["id"]
};
</script>

<style lang="stylus" scoped></style>