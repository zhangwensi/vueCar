<template>
    <div class="header-phone">
        <GoBack culome="绑定手机号" />
        <div class="phone-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.phone" placeholder="输入手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <button type="button" class="button-code">获取验证码</button>
                    <el-input v-model="form.phoneCode" placeholder="输入手机号验证码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="botton-blank">确定</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    name: "Phone",
    data() {
        return {
            form:{
                phone: '',
                phoneCode: ''
            }
        }
    },
    methods: {
        Safe : function () {
            this.$router.push({
                name: 'Fund'
            })
        }
    }
}
</script>

<style lang="scss">
.header-phone {
    padding-left: 30px;
    .phone-form-ui {
        margin-right: 30px;
    }
} 
</style>