<template>
    <div class="cars-wrap">
        <span @click="handlerClick">选择汽车</span>
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
.cars-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    font-size: 50px;
}
</style>