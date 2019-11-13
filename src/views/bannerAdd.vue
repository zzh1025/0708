<template>
  <div class="wrap">
    <el-button @click="dialogFormVisible = true">添加</el-button>
    <el-dialog title="添加banner" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="图片地址" :label-width="formLabelWidth">
          <el-input v-model="data.img" autocomplete="off" placeholder="请输入图片地址"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" v-if="'des' in data">
          <el-input v-model="data.des" autocomplete="off" placeholder="描述"></el-input>
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
      formLabelWidth: "120px"
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = false;
      if ("des" in this.data) {
        this.$emit("bannerAdd", this.data);
      } else {
        return "添加家教类型";
        this.$emit("homeBannerAdd", this.data);
      }
    }
  },
  props: ["data"]
};
</script>

<style lang="stylus" scoped>
.el-date-editor {
  width: 100%;
}

.wrap >>> .el-dialog {
  padding-right: 50px;
}
</style>