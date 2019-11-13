<template>
    <div class="right">
        <h1>{{$route.name}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import "../common/stylus/index.styl"
.right{
    flex 1;
    h1{
        line-height 50px;
        color $third;
        text-indent 20px;
        padding 20px;
    }
}
</style>