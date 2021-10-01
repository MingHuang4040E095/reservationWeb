<template>
    <v-hover v-slot:default="{ hover }">
        <v-img :class="{ 'on-hover': hover }" :aspect-ratio="4 / 3" :src="src">
            <v-row justify="center" align="center" class="white--text pa-2 fill-height masklayer">
                <span class="text-h4 font-weight-black">{{ roomType }}</span>
            </v-row>
        </v-img>
    </v-hover>
</template>
<script>
export default {
    props: {
        src: {
            default: require('@/assets/image/home/banner/banner1.png'),
        },
        roomType: {
            type: String,
            default: '',
        },
    },
}
</script>
<style lang="scss" scoped>
.masklayer {
    cursor: pointer;
    background: rgb(0 0 0 / 51%);
    transition: 0.5s;

    > span {
        position: absolute;
        text-align: center;
        transition: 0.5s;
        top: 50%;
        transform: translateY(-50%);

        &::before {
            content: '';
            width: 80px;
            height: 0px;
            position: absolute;
            left: 50%;
            bottom: -20%;
            border-bottom: 2px solid #fff;
            transform: translateX(-50%);
            transition: 0.5s;
        }
    }

    &:hover {
        background: rgb(0 0 0 / 20%);

        > span {
            // color="#9CCC65"
            color: rgb(251 140 0 / 70%);
            top: 45%;

            &::before {
                width: 120px;
                bottom: -70%;
                border-bottom: 2px solid rgb(251 140 0 / 70%);
            }
        }
    }
}
</style>
