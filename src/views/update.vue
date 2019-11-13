<template>
  <div class="wrap">
    <el-button @click="find">查看</el-button>
    <el-dialog title="添加 | 修改管理员" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="user.name" autocomplete="off" placeholder="请输入账号" disabled></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="user.pass"
            autocomplete="off"
            placeholder="请输入密码"
            show-password
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="user.des" autocomplete="off" placeholder="描述"></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <el-date-picker v-model="user.time" autocomplete="off" placeholder="选择日期" type="date"></el-date-picker>
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
      user: {
        name: "",
        pass: "",
        des: "",
        time: ""
      },
      pass: "",
      formLabelWidth: "120px"
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = false;
      this.$axios({
        url: API.updateManage,
        method: "post",
        data: this.user
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
    find() {
      this.dialogFormVisible = true;
      this.$axios({
        url: API.findManage,
        method: "post",
        data: {
          id:this.id
        }
      }).then(res => {
        if (res.data.isok) {
          this.user= res.data.data[0];
        }
      });
    }
  },
  props: ["id"]
};
</script>

<style lang="stylus" scoped>
.el-date-editor {
  width: 100%;
}
.wrap{
  display inline-block;
}
</style>