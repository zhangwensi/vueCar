<template>
    <div>
        <section class="cars-card" >
            <header>
                <h4 class="car-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="attr">新能源汽车 5座</p>
            </header>
            <div class="car-context">
                <div class="car-info">
                    <div>
                        <h4 class="car-number">苏 HAE86</h4>
                        <div class="car-process">
                            <ul>
                                <li class="li-active"></li>
                                <li class="li-active"></li>
                                <li class="li-active"></li>
                                <li class="li-active"></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <p class="distance">
                                <sub>约</sub><strong>600</strong><sub>KM</sub>
                            </p>
                        </div>
                    </div>
                </div>
                <img src="../../assets/images/pic001.jpg" alt="pic001">
            </div>
            <footer class="car-link">
                <a href="javascript:void(0);" >某停车场</a>
            </footer>
        </section>
        <section class="cars-card cars-detail" :style="'height:'+height">
            <h4 class="column">某某停车场
                <i class="close"></i>
            </h4>
            <header>
                <h4 class="car-logo">
                    <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
                    <span class="name">Mustang 2019款</span>
                </h4>
                <p class="attr">新能源汽车 5座</p>
            </header>
            <img src="../../assets/images/pic001.jpg" alt="pic001">
            <div class="clearfix">
                <div class="fs-24 pull-left">苏 HAE86</div>
                <p class="distance pull-right">
                    <sub>约</sub><strong>600</strong><sub>KM</sub>
                </p>
            </div>
            <div class="car-process-wraper">
                <span class="el-line"></span>
                <span class="el-bg"></span>
            </div>
            <p class="info">取车约支付12万，本平台优惠12万</p>
            <ul class="cars-check-list">
                <li>
                    <h4 class="name pull-left">日租车</h4>
                    <span class="price pull-right">￥3000/天</span>
                </li>
                <li>
                    <h4 class="name pull-left">时租车</h4>
                    <span class="price pull-right">￥300/时</span>
                </li>
                <li>
                    <h4 class="name pull-left">长期租车</h4>
                    <span class="price pull-right">￥30000/月</span>
                </li>
            </ul>
            <div class="footer">
                <span class="pull-left">参保《全面保障服务》用车更放心</span>
                <i class="pull-right current"></i>
            </div>
            <a href="javascript:void(0);" class="select-car select-car-btn"> 预约用车</a>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Index',
    props: {
        height: {
            type: String,
            default: '257px'
        }
    },
    data(){
        return {
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/globStyleCfg.scss';
.cars-card {
    padding: 30px 30px 0px 30px;
    margin: auto;
    width: 505px;
    height: 257px;
    background-color: #fff;
    border-radius: 24px;
    @include webkit(box-shadow,0 0 18px 0 rgba(0, 0, 0,.2));
    @include webkit(box-sizing,border-box);
    header {
        // display: flex;
        // h4, p {
        //     flex: 1;
        // }
        @extend %clearfix;
        height: 34px;
    }
}
.car-logo {
    float: left;
    img {
        height: 34px;
        margin: 0px 10px 0px 0px;
        vertical-align: middle;
    }
    .name {font-size: 16px;}
}
.attr {
    float: right;
    line-height: 34px;
    opacity: 0.5;        
}
.car-context {
    @extend %clearfix;
    margin: 11px 0 7px;
    position: relative;
    img {
        float: right;
        height: 120px;
    }
    .car-info {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        .car-number {
            font-size: 18px;
            height: 34px;
            line-height: 34px;
        }
        h4 {
            margin-bottom: 0px;
        }
    }
}
.car-process {
    padding-top: 10px;
    ul {
        display: inline-block;
        margin-bottom: 0px;    
    }
    li {
        display: inline-block;
        height: 24px;
        width: 7px;
        margin-right: 3px;
        border-radius: 100px;
        background-color: #e1e1e1;
    }
    li.li-active {
        background: linear-gradient(to top,#17a8fa,#108dd9);
    }
}
.distance {
    display: inline-block;
    margin-left: 5px;
    strong {
        margin: 0 5px;
        font-size: 22px;
    }
    sub {
        position: relative;
        top: -10px;
    }
    sub:first-of-type {
        opacity: 0.8;
    }
}
.car-link {
    border-top: 1px solid #e1e1e1;
    line-height: 53px;
    width: 100%;
    position: relative;
    a {
        display: block;
        text-decoration: none;
        color: $color-main;
        opacity: 0.8;
        line-height: 26px;
        &:visited, &:hover{
            text-decoration: none;
            color: $color-main !important;
            opacity: 0.8;
        }
    }
    &:after {
        content: '';
        position: absolute;
        top: 14px;
        right: 0px;
        width: 8px;
        height: 8px;
        border-top: 1px solid #34393f;
        border-right: 1px solid #34393f;
        @include webkit (transform,rotate(45deg));
        cursor: pointer;
    }   
}
.cars-detail {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding-top: 0px;
    .select-car-btn {
        position: absolute;
        left: 50%;
        margin-left: -120px;
        bottom: -42px;
    }
    .column {
        font-size: 20px;
        color: #34393f;
        border-bottom: 1px solid #e1e1e1;
        padding: 26px 0 20px;
        position: relative;
        .close {
            position: absolute;
            display: block;
            height: 26px;
            width: 26px;
            right: 0px;
            top: 23px;
            margin-bottom: 19px;
            cursor: pointer;
            &::after, &::before {
                content: "";
                border-left: 2px solid #999c9f;
                height: 20px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -10px;
                margin-left: -1px;
            }
            &::before {@include webkit(transform,rotate(45deg))}
            &::after {@include webkit(transform,rotate(-45deg))}
        }
    }
    .car-process-wraper {
        margin-top: 17px;
        padding: 15px;
        border-radius: 100px;
        background-color: #fff;
        @include webkit(box-shadow,0 0 10px 0 rgba(0,0,0,0.1));
        .el-bg {
            height: 8px;
            display: block;
            background-color: #e1e1e1;
            border-radius: 100px;
        }
        .el-line {
            width: 60%;
            height: 8px;
            display: block;
            background-color: #0f9cee;
            border-radius: 100px;
            position: absolute;
        }
    }
    .info {
        margin: 32px 0px 28px;
        display: block;
        text-align: center;
    }
}
.cars-check-list {
    li {
        height: 43px;
        padding: 0px 17px 0px 20px;
        border-color: #f3f3f3;
        border-style: solid;
        border-width: 2px;
        border-radius: 10px;
        background-color: #f3f3f3;
        margin-bottom: 10px;
        line-height: 43px;
        font-size: 16px;
        cursor: pointer;
        &:hover {
            border-color: #0f9cee;
        }
    }
    .name, .price {
        margin: 0px;
    }
}
.footer {
    @extend %clearfix;
    i {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #cccccc;
        cursor: pointer;
        &::before {
            content: '';
            height: 6px;
            width: 10px;
            margin: 5px 0 0 5px;
            border-left: 2px solid #fff;
            border-bottom: 2px solid #fff;
            @include webkit(transform,rotate(-45deg));
            display: block;
        }  
    }
    .current {
        background-color: #000;
    }
}
</style>