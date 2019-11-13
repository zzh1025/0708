<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="家政banner" name="first">
        <v-banner></v-banner>
      </el-tab-pane>
      <el-tab-pane label="人员管理" name="second">
        <v-type></v-type>
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
    vBanner: views.leftHome,
    vType: views.rightHome,
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.wrap {
  width: 90%;
  margin: 10px auto;
}
</style>