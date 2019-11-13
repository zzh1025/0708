<template>
  <div class="leftWater">
    <el-button @click="dialogFormVisible = true">添加</el-button>
    <el-dialog :title="('des' in data)?'添加水站':'添加维修'" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="data.name" autocomplete="off" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="评分" :label-width="formLabelWidth">
          <el-input v-model="data.score" autocomplete="off" placeholder="评分" type="number"></el-input>
        </el-form-item>
        <el-form-item :label="('des' in data)?'月销售量':'类型'" :label-width="formLabelWidth">
          <el-input v-model="data.count" autocomplete="off" placeholder="月销售量" type="number" v-if="'des' in data"></el-input>
          <el-input v-model="data.type" autocomplete="off" placeholder="类型" v-else></el-input>
        </el-form-item>
        <el-form-item label="点赞数量" :label-width="formLabelWidth">
          <el-input v-model="data.likeNum" autocomplete="off" placeholder="点赞数量" type="number"></el-input>
        </el-form-item>
        <el-form-item :label="('des' in data)?'浏览量':'关注人数'" :label-width="formLabelWidth">
          <el-input v-model="data.readNum" autocomplete="off" :placeholder="('des' in data)?'浏览量':'关注人数'" type="number"></el-input>
        </el-form-item>
        <el-form-item label="商家地址" :label-width="formLabelWidth">
          <el-input v-model="data.address" autocomplete="off" placeholder="商家地址"></el-input>
        </el-form-item>
        <el-form-item label="距离" :label-width="formLabelWidth">
          <el-input v-model="data.len" autocomplete="off" placeholder="距离"></el-input>
        </el-form-item>
        <el-form-item label="商家信息" :label-width="formLabelWidth">
          <el-input v-model="data.des" autocomplete="off" placeholder="商家信息" v-if="'des' in data"></el-input>
          <el-input v-model="data.info" autocomplete="off" placeholder="商家信息" v-else></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="data.tel" autocomplete="off" placeholder="电话"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth" v-if="'des' in data">
          <el-input v-model="data.price" autocomplete="off" placeholder="价格"></el-input>
        </el-form-item>
        <el-form-item label="图片地址" :label-width="formLabelWidth" v-if="'des' in data">
          <el-input v-model="data.img" autocomplete="off" placeholder="请输入图片地址"></el-input>
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
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = false;
      if("des" in this.data){
        this.$emit("leftWaterAdd",this.data);
      }
      else{
        this.$emit("repairAdd",this.data);
      }
    }
  },
  props:["data"]
};
</script>

<style lang="stylus" scoped>
.el-date-editor {
  width: 100%;
}

.leftWater >>> .el-dialog {
  padding:0 50px 30px 0;
}
</style>