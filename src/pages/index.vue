<template>
  <div class="wrap">
    <v-header></v-header>
    <div class="box">
      <v-left></v-left>
      <v-right></v-right>
    </div>
  </div>
</template>

<script>
import views from "../views";
export default {
  components: {
    vLeft: views.left,
    vRight: views.right,
    vHeader: views.header
  }
};
</script>

<style lang="stylus" scoped>
.wrap{
    display flex;
    width 100vw;
    height 100vh;
    flex-direction column;
}
.box{
    display flex;
    flex 1;
}
</style>