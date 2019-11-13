<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="家教banner" name="first">
        <v-banner></v-banner>
      </el-tab-pane>
      <el-tab-pane label="家教类型" name="second">
        <v-type></v-type>
      </el-tab-pane>
      <el-tab-pane label="家教排行" name="top">
        <v-top></v-top>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import API from "../common/js/API";
import views from "../views";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first"
    };
  },
  components: {
    vBanner: views.teacherBanner,
    vType: views.teacherType,
    vTop: views.teacherTop
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.wrap {
  width: 80%;
  margin: 10px auto;
}
</style>