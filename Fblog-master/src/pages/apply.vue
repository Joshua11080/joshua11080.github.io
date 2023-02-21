<template>
  <div class="apply">
    <el-row class="main" type="flex" justify="center">
      <el-col :span="16">
        <h5 class="title"><i class="el-icon-circle-plus-outline" />{{ $t('apply.process') }}</h5>
        <hr>
        <el-card shadow="hover">
          <el-steps align-center :active="currStep">
            <el-step :title="$t('apply.step1')" description="首先接入本博客站点" />
            <el-step :title="$t('apply.step2')" description="提交您的站点信息" />
            <el-step :title="$t('apply.step3')" description="等待审核，邮件通知" />
          </el-steps>
          <div v-if="currStep === 1" class="stepContent">
            <div class="statement">
              <div class="item">{{ $t('apply.blogLink') }}：https://www.fengziy.cn/</div>
              <div class="item">{{ $t('apply.nickName') }}：it疯子也</div>
              <div class="item">{{ $t('apply.introduction') }}：向上的路并不拥挤，而大多数人选择了安逸。</div>
            </div>
          </div>
          <div v-if="currStep === 2" class="stepContent">
            <el-form ref="formLabelAlign" label-position="right" :rules="rules" label-width="80px" :model="formLabelAlign">
              <el-form-item :label="$t('apply.nickName')" prop="name">
                <el-input v-model="formLabelAlign.name" />
              </el-form-item>
              <el-form-item :label="$t('apply.email')" prop="email">
                <el-input v-model="formLabelAlign.email" />
              </el-form-item>
              <el-form-item :label="$t('apply.blogLink')" prop="blogLink">
                <el-input v-model="formLabelAlign.blogLink" />
              </el-form-item>
              <el-form-item :label="$t('apply.notes')" prop="notes">
                <el-input v-model="formLabelAlign.notes" type="textarea" />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="currStep === 3" class="stepContent">
            <p class="tips">
              <i class="el-icon-success" style="color: #409EFF;font-size: 30px;" /><br> 感谢您对本站的信赖，审核成功后我将以邮件的方式通知您。
            </p>
          </div>
          <el-row type="flex" class="btn-tool" justify="space-around">
            <el-button v-if="currStep === 2" icon="el-icon-circle-close-outline" @click="lastStep">{{ $t('apply.process') }}</el-button>
            <el-button v-if="currStep !== 3" type="primary" icon="el-icon-circle-check-outline" @click="nextStep">{{ $t('apply.next') }}</el-button>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Apply',
  data() {
    return {
      currStep: 1,
      formLabelAlign: {
        name: '',
        email: '',
        blogLink: '',
        notes: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入您的昵称',
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: '请输入邮箱地址',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: ['blur', 'change']
        }
        ],
        blogLink: [{
          required: true,
          message: '请输入博客',
          trigger: 'blur'
        }],
        notes: [{
          required: false,
          message: '请输入额外备注',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    nextStep() {
      this.currStep++
    },
    lastStep() {
      this.currStep--
    }
  }
}
</script>

<style scoped>
	.title {
		margin-top: 40px;
	}

	.statement {
		padding: 20px;
		background-color: #EBEEF5;
		margin-top: 20px;
	}

	.stepContent {
		margin: 30px 0;
	}

	.stepContent .tips {
		font-size: 18px;
		text-align: center;
	}
</style>
