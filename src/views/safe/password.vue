<template>
    <div class="header-safe">
        <GoBack culome="修改登录密码" />
        <div class="car-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.name" placeholder="原始密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="新密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.passwords" placeholder="确认密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <button type="button" class="button-code">获取验证码</button>
                    <el-input v-model="form.passwords" placeholder="验证码"></el-input>
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
                name: '',
                password: '',
                passwords: ''
            }
        }
    },
    methods: {
        Safe : function () {
            this.$router.push({
                name: 'Safe'
            })
        }
    }
}
</script>

<style lang="scss">
.header-safe {
    padding-left: 30px;
    .car-form-ui {
        margin-right: 30px;
    }
} 
</style>