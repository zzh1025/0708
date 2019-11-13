<template>
  <div class="wrap">
    <el-button @click="dialogFormVisible = true">添加</el-button>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="图片地址" :label-width="formLabelWidth">
          <el-input v-model="data.img" autocomplete="off" placeholder="请输入图片地址"></el-input>
        </el-form-item>
        <el-form-item label="机构图片" :label-width="formLabelWidth" v-if="'teacherImg' in data">
          <el-input v-model="data.teacherImg" autocomplete="off" placeholder="请输入图片地址"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth" v-if="'des' in data">
          <el-input v-model="data.des" autocomplete="off" placeholder="描述"></el-input>
           </el-form-item>
            <el-form-item label="属性" :label-width="formLabelWidth" v-if="'type' in data">
          <el-input v-model="data.type" autocomplete="off" placeholder="属性"></el-input>
           </el-form-item>
           <el-form-item label="报名人数" :label-width="formLabelWidth" v-if="'teacherImg' in data">
          <el-input v-model="data.num" autocomplete="off" placeholder="报名人数"></el-input>
           </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false;data={img:'',des:''}" v-if="'des' in data">取 消</el-button>
        <el-button @click="dialogFormVisible = false;data={img:'',type:''}" v-if="'type' in data">取 消</el-button>
        <el-button @click="dialogFormVisible = false;data={img:'',num:'',teacherImg:''}" v-if="'teacherImg' in data">取 消</el-button>
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
        this.$emit("teacherAdd",this.data);
      }
      else{
        this.$emit("typeAdd",this.data);
      }
    }
  },
  props:["data"],
  computed: {
      title(){
          if("des" in this.data){
              return "添加家教banner"
          }
          if("type" in this.data){
              return "添加家教类型"
          }
          if("teacherImg" in this.data){
              return "添加家教排行"
          }
      }
  }
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