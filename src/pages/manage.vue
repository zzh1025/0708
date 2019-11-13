<template>
  <div>
    <v-add @add="init"></v-add>
    <table>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="des" label="属性" width="180"></el-table-column>
        <el-table-column prop="time" label="时间" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <v-update :id="scope.row.id" @update="init"></v-update>
            <v-del :id="scope.row.id" @del="del"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </table>
  </div>
</template>

<script>
import API from "../common/js/API";
import views from "../views";
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.init();
  },
  components: {
    vAdd: views.add,
    vDel: views.del,
    vUpdate: views.update
  },
  methods: {
    init() {
      this.$axios({
        url: API.findManage,
        method: "post"
      }).then(res => {
        if (res.data.isok) {
          this.tableData = res.data.data;
        }
      });
    },
    del(e) {
      this.$axios({
        url: API.delManage,
        method: "post",
        data: {
          id: e
        }
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.wrap {
  padding-left: 40px;
}

.wrap >>> .el-form-item__label {
  text-align: center;
}

.wrap >>> .el-dialog {
  padding-right: 50px;
}
</style>