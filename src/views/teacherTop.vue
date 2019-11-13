<template>
  <div class="wrapTop">
    <v-add @typeAdd="add" :data="data"></v-add>
    <table>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="img" label="图片" width="300">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt style="width: 100px;height: 100px" />
          </template>
        </el-table-column>
        <el-table-column prop="num" label="报名人数" width="100"></el-table-column>
        <el-table-column prop="teacherImg" label="授课机构" width="300">
          <template slot-scope="scope">
            <img :src="scope.row.teacherImg" alt style="width: 100px;height: 100px" />
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
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
import vAdd from "./teacherAdd";
export default {
  data() {
    return {
      tableData: [],
      data: {
        teacherImg: "",
        img: "",
        num:""
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    del(e) {
      this.$axios({
        url: API.delTeacherTop,
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
        url: API.teacherTop
      }).then(res => {
        if (res.data.isok) {
          this.tableData = res.data.data;
        }
      });
    },
    add(banner) {
      console.log(banner);
      this.$axios({
        url: API.addTeacherTop,
        params: banner
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
    vAdd
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.wrapTop {
  width: 100%;

  table {
    width: 100%;
  }
}
</style>