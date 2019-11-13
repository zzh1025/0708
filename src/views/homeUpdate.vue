<template>
  <div class="homeUpdate" style="display:inline-block">
    <el-button @click="find">查看</el-button>
    <el-dialog title="修改家政人员" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="data.name" autocomplete="off" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="data.age" autocomplete="off" placeholder="年龄" type="number"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="data.tel" autocomplete="off" placeholder="电话"></el-input>
        </el-form-item>
        <el-form-item label="资格认证" :label-width="formLabelWidth">
          <el-checkbox-group v-model="data.qualification">
            <el-checkbox v-for="(item,index) in qualification" :key="index" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="服务项目" :label-width="formLabelWidth">
          <el-checkbox-group v-model="data.type">
            <el-checkbox v-for="(item,index) in type" :key="index" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="学历" :label-width="formLabelWidth">
          <el-select v-model="data.edu" placeholder="请选择">
            <el-option v-for="(item,index) in options" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作年限" :label-width="formLabelWidth">
          <el-input v-model="data.year" autocomplete="off" placeholder="工作年限" type="number"></el-input>
        </el-form-item>
        <el-form-item label="级别" :label-width="formLabelWidth">
          <el-input v-model="data.vNum" autocomplete="off" placeholder="级别"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="data.price" autocomplete="off" placeholder="价格"></el-input>
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-input v-model="data.city" autocomplete="off" placeholder="城市"></el-input>
        </el-form-item>
        <el-form-item label="经验" :label-width="formLabelWidth">
          <el-input v-model="data.experience" autocomplete="off" placeholder="经验"></el-input>
        </el-form-item>
        <el-form-item label="点赞数量" :label-width="formLabelWidth">
          <el-input v-model="data.likeNum" autocomplete="off" placeholder="点赞数量" type="number"></el-input>
        </el-form-item>
        <el-form-item label="关注人数" :label-width="formLabelWidth">
          <el-input v-model="data.readNum" autocomplete="off" placeholder="关注人数" type="number"></el-input>
        </el-form-item>
        <el-form-item label="距离" :label-width="formLabelWidth">
          <el-input v-model="data.len" autocomplete="off" placeholder="距离"></el-input>
        </el-form-item>
        <el-form-item label="自我评价" :label-width="formLabelWidth">
          <el-input v-model="data.info" autocomplete="off" placeholder="自我评价"></el-input>
        </el-form-item>
        <el-form-item label="图片地址" :label-width="formLabelWidth">
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
      data: {
        img: "",
        name: "",
        likeNum: "",
        readNum: "",
        len: "",
        tel: "",
        price: "",
        city: "",
        type: [],
        info: "",
        edu: "",
        age: "",
        vNum: "",
        year: "",
        qualification: [],
        experience: ""
      },
      formLabelWidth: "120px",
      options: ["小学", "初中", "高中", "本科", "研究生", "博士"],
      qualification: [],
      type: []
    };
  },
  methods: {
    add() {
      this.dialogFormVisible = false;
      this.$emit("homeUpdate", this.data);
    },
    find() {
      this.dialogFormVisible = true;
      this.$axios({
        url: API.findHomeWorker,
        params: {
          id: this.id
        }
      }).then(res => {
        if (res.data.isok) {
          this.data = res.data.data[0];
          if (this.data.type.indexOf("[") != -1) {
            this.data.qualification = JSON.parse(this.data.qualification);
            this.data.type = JSON.parse(this.data.type);
          } else {
            this.data.qualification = this.data.qualification.split(",");
            this.data.type = this.data.type.split(",");
          }
        }
      });
    }
  },
  props: ["id"],
  mounted() {
    this.$axios({
      url: API.getQualification
    }).then(res => {
      this.qualification = res.data.qualification;
    });
    this.$axios({
      url: API.getHomeType
    }).then(res => {
      this.type = res.data.type;
    });
  }
};
</script>

<style lang="stylus" scoped>
.el-date-editor {
  width: 100%;
}

.homeUpdate >>> .el-dialog {
  padding: 0 50px 30px 0;
}

.homeUpdate >>> .el-input__inner {
  width: 100%;
}

.homeUpdate >>> .el-input--suffix {
  width: 213%;
}
</style>