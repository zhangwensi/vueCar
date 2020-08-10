<template>
    <div class="user-container">
        <div class="user-info">
            <img src="../../assets/images/face.png" alt="">
            <div class="meta">
                <h4 class="name">14801228164@qq.com</h4>
                <span>安全驾驶分<strong>0</strong></span>
            </div>
        </div>
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
.user-info {
    display: flex;
    padding: 84px 0 0 10px;
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
</style>