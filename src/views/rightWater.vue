<template>
  <div class="rightWater">
    <div class="left">
      <el-select v-model="userId">
        <el-option value="" label="全部"></el-option>
        <el-option v-for="item in water" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </div>
    <table>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="name" label="用户名称" width="200"></el-table-column>
        <el-table-column prop="content" label="评论内容" width="200"></el-table-column>
         <el-table-column label="时间" width="200">
          <template slot-scope="scope">
            <div>{{scope.row.time | filterDate}}</div>
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
export default {
  data() {
    return {
      tableData: [],
      water:[],
      userId:""
    };
  },
  mounted() {
    this.init({});
    this.getWater();
  },
  methods: {
    del(e) {
      this.$axios({
        url: API.delWater,
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
    init(params) {
      this.$axios({
        url: API.findComment,
        params
      }).then(res => {
        if (res.data.isok) {
          this.tableData = res.data.data;
        }
      });
    },
    getWater() {
      this.$axios({
        url: API.findWater
      }).then(res => {
        if (res.data.isok) {
          this.water = res.data.data;
        }
      });
    }
  },
  watch: {
    userId() {
      this.init({ waterId: this.userId });
    }
  },
  components: {
    vDel
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.rightWater {
  width: 100%;

  table {
    width: 100%;
  }
}

.rightWater >>> .el-input__inner {
  width: 650px;
}

.left {
  padding-left: 110px;
}
</style>