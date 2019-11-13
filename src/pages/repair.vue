<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="维修" name="first">
        <v-leftRepair></v-leftRepair>
      </el-tab-pane>
      <el-tab-pane label="维修评论" name="second">
        <v-rightRepair></v-rightRepair>
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
    vLeftRepair: views.leftRepair,
    vRightRepair: views.rightRepair,
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