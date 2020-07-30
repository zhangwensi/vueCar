<template>
    <div class="cars-wrap">
        <div class="car-list-swiper">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                    <CarList />
                </swiper-slide>
                <swiper-slide>
                    <CarList />
                </swiper-slide>
                <swiper-slide>
                    <CarList />
                </swiper-slide>
                <swiper-slide>
                    <CarList />
                </swiper-slide>
                <swiper-slide>
                    <CarList />
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>  
        </div>
        <div @click="handlerClick">汽车列表</div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import CarList from '@c/carList/index.vue'
export default {
    name: 'Cars',
    components: { Swiper, SwiperSlide, CarList },
    data() {
        return{
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
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
.car-list-swiper {
    padding: 0px 155px;
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        top: 106px;
        width: 60px;
        height: 100px;
        border-radius: 100px;
        background: #fff;
        @include webkit(box-shadow,0 0 18px 0 rgba(0,0,0,.2));
        &:hover {
            background: $color-main;
            &:after {
                border-color:$color-blue;
            }
        }
        &:after {
            content: '';
            width: 17px;
            height: 17px;
            border-style: solid;
            border-width: 3px;
            border-color: #000;
            border-bottom: none;
        }
    }
    .swiper-button-prev {
        margin-left: 53px;
        text-align: center;
        &:after {
            border-right: none;
            @include webkit(transform,rotate(-45deg));
            margin-left: 5px;
        }
    }
    .swiper-button-next {
        margin-right: 53px;
        text-align: center;
        &:after {
            border-left: none;
            @include webkit(transform,rotate(45deg));
            margin-right: 5px;
        }
    }
}
</style>