<template>
  <div class="wrap">
    <v-add @bannerAdd="add" :data="banner"></v-add>
    <table>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="img" label="图片" width="300">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt style="width: 100px;height: 100px" />
          </template>
        </el-table-column>
        <el-table-column prop="des" label="描述" width="300"></el-table-column>
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
import views from "../views";
export default {
  data() {
    return {
      tableData: [],
      banner:{
          img:"",
          des:""
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    del(e) {
      this.$axios({
        url: API.delBanner,
        params: {
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
    },
    init() {
      this.$axios({
        url: API.banner
      }).then(res => {
        if (res.data.isok) {
          this.tableData = res.data.data;
        }
      });
    },
    add(banner) {
        console.log("teacher add")
      this.$axios({
        url: API.addBanner,
        params:banner
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init();
          this.$emit("add");
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
    vDel:views.del,
    vAdd:views.bannerAdd
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.wrap{
    padding-left 20px
}
</style>