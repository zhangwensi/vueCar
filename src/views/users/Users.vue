<template>
    <div class="user-container">
        <div class="user-info">
            <img src="../../assets/images/face.png" alt="">
            <div class="meta">
                <h4 class="name">14801228164@qq.com</h4>
                <span>安全驾驶分 <strong>0</strong></span>
            </div>
        </div>
        <router-link ></router-link>
        <ul class="group-link">
            <router-link to="aaa" tag="a" class="arrow">
                <i class="icon icon-style icon-link-1"></i>
                我的账户
            </router-link>
            <router-link to="bbb" tag="a" class="arrow">
                <i class="icon icon-style icon-link-2"></i>
                租车订单
            </router-link>
            <router-link to="ccc" tag="a" class="arrow">
                <i class="icon icon-style icon-link-3"></i>
                实名认证
            </router-link>
            <router-link to="/Safe" tag="a" class="arrow">
                <i class="icon icon-style icon-link-4"></i>
                安全设置
            </router-link>
            <router-link to="eee" tag="a" class="arrow">
                <i class="icon icon-style icon-link-5"></i>
                帮助中心
            </router-link>
        </ul>
        <button class="logout">登出</button>
    </div>
</template>

<script>
export default {
    name: 'Users',
    data() {
        return {}
    }
}
</script>

<style lang="scss">
.user-container {
    padding-left: 34px;
}
.logout {
    width: 165px;
    height: 58px;
    background: #2d3339;
    text-align: center;
    border: none;
    border-radius: 100px;
    color: #fff;
    font-size: 18px;
    position: absolute;
    left: 50%;
    margin-left: -82px;
    bottom: 60px;
}
.user-info {
    display: flex;
    padding: 84px 0 80px 10px;
    img {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border: 6px solid #2f343a;
    }
    .meta {
        flex: 1;
        padding-left: 17px;
        .name {
            color: #909090;
            font-size: 18px;
            line-height: 43px;
            margin-bottom: 0px;
        }
        span {
            display: inline-block;
            background-color: #10a0fa;
            border-radius: 100px;
            height: 27px;
            line-height: 27px;
            font-size: 14px;
            padding: 0 17px;
            color: #fff;
        }
    }
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