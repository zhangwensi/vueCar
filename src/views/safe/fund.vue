<template>
    <div class="header-fund">
        <GoBack culome="设置资金密码" />
        <div class="fund-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.password" placeholder="设置6位数密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <button type="button" class="button-code">获取验证码</button>
                    <el-input v-model="form.passwordCode" placeholder="验证码"></el-input>
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
    name: "password",
    data() {
        return {
            form:{
                password: '',
                passwordCode: ''
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
.header-fund {
    padding-left: 30px;
    .fund-form-ui {
        margin-right: 30px;
    }
} 
</style>