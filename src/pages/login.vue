<template>
  <div class="shade">
    <div class="box">
      <h3 class="text-center">登录</h3>
      <el-select v-model="user.type" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="elInput">
        <el-input v-model="user.name" placeholder="请输入账号" clearable></el-input>
      </div>
      <div class="elInput">
        <el-input placeholder="请输入密码" v-model="user.pass" show-password></el-input>
      </div>
      <div class="elInput">
          <el-button type="primary" @click="login">登录</el-button>
      </div>
      <div class="text-center"></div>
    </div>
  </div>
</template>

<script>
import API from "../common/js/API"
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "管理员"
        },
        {
          value: "2",
          label: "用户"
        }
      ],
      user:{
        name:"",
        pass:"",
        type:""
      }
    };
  },
  methods: {
    login() {
      this.$axios({
        url: API.login,
        method: "post",
        data: this.user
      }).then(res => {
        if (res.data.isok) {
          sessionStorage.setItem("user",this.user.name);
          sessionStorage.setItem("isAdmin",res.data.type);
          this.$router.replace("/index");
        } else {
          this.$message({
          message: res.data.info,
          type: 'warning'
        });
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
h3 {
  line-height: 50px;
  color $info;
  font-size 30px
}
</style>