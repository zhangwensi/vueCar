<template>
    <div class="header-bank">
        <GoBack culome="绑定银行卡号" />
        <div class="car-form-ui">
            <el-form ref="form" :model="form">
                <el-form-item>
                    <el-input v-model="form.userName" placeholder="用户名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="form.bankName" placeholder="选择开户银行" id="selectBank">
                        <el-option label="中国工商银行" value="ICBC"></el-option>
                        <el-option label="中国银行" value="BOC"></el-option>
                        <el-option label="中国农业银行" value="ABC"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.bankPhone" placeholder="绑定手机号"></el-input>
                </el-form-item>
                <el-form-item>
                    <button type="button" class="button-code">获取验证码</button>
                    <el-input v-model="form.bankPhoneCode" placeholder="手机验证码"></el-input>
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
    name: "AddBank",
    data() {
        return {
            form:{
                userName: '',
                bankName: '',
                bankPhone: '',
                bankPhoneCode: ''

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
.header-bank {
    padding-left: 30px;
    .car-form-ui {
        margin-right: 30px;
    }
} 
</style>