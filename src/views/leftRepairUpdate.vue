<template>
  <div class="box" style="display:inline-block">
    <el-button @click="find">查看</el-button>
    <el-dialog title="修改维修" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="data.name" autocomplete="off" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="评分" :label-width="formLabelWidth">
          <el-input v-model="data.score" autocomplete="off" placeholder="评分" type="number"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="data.type" autocomplete="off" placeholder="类型"></el-input>
        </el-form-item>
        <el-form-item label="点赞数量" :label-width="formLabelWidth">
          <el-input v-model="data.likeNum" autocomplete="off" placeholder="点赞数量" type="number"></el-input>
        </el-form-item>
        <el-form-item label="关注人数" :label-width="formLabelWidth">
          <el-input v-model="data.readNum" autocomplete="off" placeholder="关注人数" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商家地址" :label-width="formLabelWidth">
          <el-input v-model="data.address" autocomplete="off" placeholder="商家地址"></el-input>
        </el-form-item>
        <el-form-item label="距离" :label-width="formLabelWidth">
          <el-input v-model="data.len" autocomplete="off" placeholder="距离"></el-input>
        </el-form-item>
        <el-form-item label="商家信息" :label-width="formLabelWidth">
          <el-input v-model="data.info" autocomplete="off" placeholder="商家信息"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="data.tel" autocomplete="off" placeholder="电话"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "120px",
      data:{}
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = false;
      this.$axios({
        url: API.updateRepair,
        params:this.data
      }).then(res => {
        if (res.data.isok) {
          this.$message({
            message: res.data.info,
            type: "success"
          });
          this.$emit("update")
        } else {
          this.$message({
            message: res.data.info,
            type: "warning"
          });
        }
      });
    },
    find(){
      this.dialogFormVisible = true;
      this.$axios({
        url: API.findRepair,
        params:{
          id:this.id
        }
      }).then(res => {
        if (res.data.isok) {
          this.data = res.data.data[0];
        }
      });
    }
  },
  props:["id"]
};
</script>

<style lang="stylus" scoped>
.el-date-editor {
  width: 100%;
}

.box >>> .el-dialog {
  padding:0 50px 30px 0;
}
</style>