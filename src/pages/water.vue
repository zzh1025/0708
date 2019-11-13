<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="水站" name="first">
        <v-leftWater></v-leftWater>
      </el-tab-pane>
      <el-tab-pane label="水站评论" name="second">
        <v-rightWater></v-rightWater>
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
    vLeftWater: views.leftWater,
    vRightWater: views.rightWater,
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