<template>
  <div class="rightHome">
    <v-add @homeAdd="add" :data="data"></v-add>
    <div class="left">
      <el-select v-model="userId">
        <el-option value="" label="全部"></el-option>
        <el-option v-for="(item,index) in water" :key="index" :label="item" :value="item"></el-option>
      </el-select>
    </div>
    <table>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="name" label="名称" width="100"></el-table-column>
        <el-table-column prop="tel" label="电话" width="150"></el-table-column>
        <el-table-column prop="price" label="价格" width="100"></el-table-column>
        <el-table-column prop="age" label="年龄" width="100"></el-table-column>
        <el-table-column prop="edu" label="学历" width="100"></el-table-column>
        <el-table-column prop="type" label="服务类型" width="200"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <v-update :id="scope.row.id" @homeUpdate="update">查看</v-update>
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
import vAdd from "./homeAdd";
import vUpdate from "./homeUpdate";
export default {
  data() {
    return {
      tableData: [],
      water:[],
      userId:"",
      data:{
        img: "",
        name: "",
        likeNum: "",
        readNum: "",
        len: "",
        tel: "",
        price: "",
        city:"",
        type:[],
        info:"",
        edu:"",
        age:"",
        vNum:"",
        year:"",
        qualification:[],
        experience:""
      }
    };
  },
  mounted() {
    this.init({});
    this.getWater();
  },
  methods: {
    del(e) {
      this.$axios({
        url: API.delHomeWorker,
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
        url: API.findHomeWorker,
        params
      }).then(res => {
        if (res.data.isok) {
          this.tableData = res.data.data;
        }
      });
    },
    getWater() {
      this.$axios({
        url: API.getHomeType
      }).then(res => {
        if (res.data.isok) {
          this.water = res.data.type;
        }
      });
    },
    add(params) {
      this.$axios({
        url: API.addHomeWorker,
        params
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init({});
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    },
    update(params) {
      this.$axios({
        url: API.updateHomeWorker,
        params
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.init({});
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    }
  },
  watch: {
    userId() {
      this.init({ type: this.userId });
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

.rightHome {
  width: 100%;

  table {
    width: 100%;
  }
}

.rightHome >>> .el-input__inner {
  width: 650px;
}

.left {
  padding-left: 150px;
}
</style>