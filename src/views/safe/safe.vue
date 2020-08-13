<template>
    <div class="user-container">
        <GoBack culome="安全设置" />
        <ul class="group-link">
            <router-link to="password" tag="a" class="arrow">
                修改登录密码
            </router-link>
            <router-link to="bbb" tag="a" class="arrow">
                设置资金密码
            </router-link>
            <router-link to="ccc" tag="a" class="arrow">
                绑定手机号码
            </router-link>
            <router-link to="ddd" tag="a" class="arrow">
                绑定银行卡号
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Safe',
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.user-container {
    padding-left: 34px;
}
.group-link {
    a {
        position: relative;
        display: block;
        height: 64px;
        line-height: 64px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        margin: 0 -30px;
        color: rgba(255,255,255,0.4);
        font-size: 15px;
        padding: 0 30px;
    }
    .icon-style {
        width: 30px;
        height: 30px;
        margin: 0 16px -10px 2px;
    }
    .arrow:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        right: 60px;
        top: 50%;
        margin-top: -2px;
        border-right: 1px solid #fff;
        border-top: 1px solid #ffff;
        @include webkit(box-sizing,border-box);
        @include webkit(transform,rotate(45deg));
        opacity: 0.2;
    }
}
</style>