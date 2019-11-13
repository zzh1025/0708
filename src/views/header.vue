<template>
    <div class="header">
        <p>后台管理系统</p>
        <div class="user">
            <h3>{{user}}</h3>
            <el-button @click="outlogin">退出登录</el-button>
        </div>
    </div>
</template>


<script>
import API from "../common/js/API";
export default {
    methods:{
        outlogin(){
           this.$confirm('是否确定退出登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios({
              url: API.exit
          }).then(res=>{
              if(res.data.isok){
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
                this.$router.replace("/login");
              }
          })
        })
        }
    },
    data(){
        return {
            user: sessionStorage.getItem("user")
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../common/stylus/index.styl"
.header{
    width 100vw;
    height 100px;
    background $color1;
    color $color;
    text-align center;
    line-height 100px;
    font-size 35px;
    font-weight bold;
    display flex;
    p{
        width 80%;
        text-indent 25%;
        letter-spacing 10px;
    }
    .user{
        display flex;
        height 100px;
        .el-button{
            height 35px;
            padding-top 10px;
            margin 35px 20px 0;
        }
    }
}
</style>