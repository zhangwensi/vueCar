<template>
    <div class="header-back">
        <div class="back">
            <i class="icon-style"></i>
            <h4 class="title">{{culome}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Back',
    props: {
        culome : {
            type: String,
            default: ""
        }
    },
    data(){
        return {}
    }
}
</script>

<style lang="scss">
.header-back {
    padding-bottom: 147px;
    position: relative;
    .back {
        position: absolute;
        top: 21px;
        left: 0px;
        right: 0px;
        height: 40px;
        line-height: 40px;
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