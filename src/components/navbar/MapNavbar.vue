<template>
    <div class="mapNavbar-wrap">
        <ul>
            <li><i class="icon icon-44-w icon-help" ></i></li>
            <li><i class="icon icon-44-w icon-search" ></i></li>
            <li>
                <a href="javascript:void(0);" class="select-car">
                    选择车辆
                </a>
            </li>
            <li><i class="icon icon-44-w icon-location" ></i></li>
            <li><i class="icon icon-44-w icon-user" @click="handleUser"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MapNavbar',
    data(){
        return {}
    },
    methods: {
        handleUser() {
            this.$router.push({
                name:'User'
            })
        }
    },
}
</script>

<style lang="scss">
.mapNavbar-wrap {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 80px;
    z-index: 10;
    text-align: center;
    li{
        display: inline-block;
        .select-car {
            margin: 0 17px;
            text-decoration: none;
            display: block;
            width: 240px;
            height: 84px;
            line-height: 84px;
            color: #fff;
            border-radius: 100px;
            font-size: 26px;
            font-weight: 300;
            background-color: $color-main;
        }
        .icon {
            vertical-align: middle;
            cursor: pointer;
            margin: 0 17px;
        }
    }
}
</style>