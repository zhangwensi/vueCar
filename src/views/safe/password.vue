<template>
    <div class="header-safe">
        <div class="back">
            <i class="icon-style" @click="Safe"></i>
            <h4 class="title">修改登录密码</h4>
        </div>
    </div>
</template>
<script>
export default {
    name: "password",
    data() {
        return {}
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
    padding-bottom: 147px;
    position: relative;
    .back {
        position: absolute;
        top: 21px;
        left: 0px;
        right: 0px;
        height: 40px;
        line-height: 40px;
        margin-left: 30px;
    }
    .title {
        font-size: 16px;
        margin-left: 33px;
        color: #fff;
    }
    .icon-style {
        width: 30px;
        height: 30px;
        position: absolute;
        left: 0px;
        top: 0px;
        cursor: pointer;
        &::after {
            content: "";
            position: absolute;
            top: 10px;
            left: 0px;
            height: 12px;
            width: 12px;
            border-top: 2px solid #00a3ff;
            border-left: 2px solid #00a3ff;
            @include webkit(box-sizing,border-box);
            @include webkit(transform,rotate(-45deg));
            cursor: pointer;
        }
    }
}    
</style>