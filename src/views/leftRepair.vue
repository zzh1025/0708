<template>
  <div class="leftRepair">
    <v-add @repairAdd="add" :data="data"></v-add>
    <table>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="name" label="维修名称" width="200"></el-table-column>
        <el-table-column prop="tel" label="电话" width="200"></el-table-column>
        <el-table-column prop="type" label="类型" width="200"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <v-update :id="scope.row.id"></v-update>
            <v-del :id="scope.row.id" @del="del"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </table>
  </div>
</template>

<script>
import API from "../common/js/API";
import vDel from "./del";
import vAdd from "./leftWaterAdd";
import vUpdate from "./leftRepairUpdate";
export default {
  data() {
    return {
      tableData: [],
      data: {
        name: "",
        score: "",
        type: "",
        likeNum: "",
        readNum: "",
        address: "",
        len: "",
        info: "",
        tel: ""
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    del(e) {
      this.$axios({
        url: API.delRepair,
        params: {
          id: e
        }
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init();
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    },
    init() {
      this.$axios({
        url: API.findRepair
      }).then(res => {
        if (res.data.isok) {
          this.tableData = res.data.data;
        }
      });
    },
    add(data) {
      this.$axios({
        url: API.addRepair,
        params: data
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init();
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    }
  },
  components: {
    vDel,
    vAdd,
    vUpdate
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.leftRepair {
  width: 100%;

  table {
    width: 100%;
  }
}
</style>