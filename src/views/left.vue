<template>
    <div class="left">
        <router-link to="/index/manage" active-class="select" v-if="isAdmin==0">管理员管理</router-link>
        <router-link to="/index/banner" active-class="select" v-if="isAdmin==1">banner管理</router-link>
        <router-link to="/index/teacher" active-class="select" v-if="isAdmin==1">家教管理</router-link>
        <router-link to="/index/water" active-class="select" v-if="isAdmin==1">水站管理</router-link>
        <router-link to="/index/repair" active-class="select" v-if="isAdmin==1">维修管理</router-link>
        <router-link to="/index/home" active-class="select" v-if="isAdmin==1">家政管理</router-link>
        <router-link to="/index/pass" active-class="select" v-if="isAdmin==1">修改密码</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isAdmin:sessionStorage.getItem("isAdmin")
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../common/stylus/index.styl"
.left{
    width 200px;
    background $color3;
    a{
        display block;
        text-align center;
        line-height 50px;
        cursor pointer;
        color $color;
    }
    .select{
        background $third;
    }
}
</style>