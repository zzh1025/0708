<template>
  <div>
    <div class="box">
      <span>账号：</span>
      <el-input v-model="user.name" disabled></el-input>
    </div>
    <div class="box">
      <span>原始密码：</span>
      <el-input v-model="user.oldpass" show-password placeholder="请输入原始密码"></el-input>
    </div>
    <div class="box">
      <span>新密码：</span>
      <el-input v-model="user.newpass" show-password placeholder="请输入新密码"></el-input>
    </div>
    <div class="box">
      <span>确认密码：</span>
      <el-input v-model="pass" show-password placeholder="请输入确认密码"></el-input>
    </div>
    <div class="wrap">
      <el-button @click="update">修改</el-button>
    </div>
  </div>
</template>

<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
        name: "",
        oldpass: "",
        newpass: ""
      },
      pass: ""
    };
  },
  mounted() {
    this.user.name = sessionStorage.getItem("user");
  },
  methods: {
    update() {
      this.$confirm("是否确定修改, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$axios({
          url: API.changePassManage,
          method: "post",
          data: this.user
        }).then(res => {
          if (res.data.isok) {
            this.$message({
              type: "success",
              message: "修改成功!"
            });
          }
          else{
              this.$message({
              type: "warning",
              message: res.data.info
            });
          }
        });
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.box {
  width: 90%;
  margin: 10px auto;
  display: flex;
  height: 40px;

  span {
    width: 10%;
    line-height: 40px;
  }
}

.wrap {
  text-align: center;
}
</style>