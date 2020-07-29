<template>
    <div class="cars-wrap">
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
                        <h4 class="car-number">苏 H3922N</h4>
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
        <div @click="handlerClick">汽车列表</div>
    </div>
</template>

<script>
export default {
    name: 'Cars',
    data() {
        return{}
    },
    methods: {
        handlerClick() {
            this.$router.push({
                name: "User"
            })
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/globStyleCfg.scss';
.cars-wrap {
    position: fixed;
    bottom: 94px;
    left: 0;
    right: 0;
    z-index: 11;
}
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
        @include clearfix;
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
    @include clearfix;
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
        @include webkit (transform,rotate(45deg))
    }
       
}
</style>