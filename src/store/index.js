import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import drawer from '@/store/drawer.js'
export default new Vuex.Store({
    state: {
        //共用的圖片
        bannetImgList: [
            {
                src: require('@/assets/image/home/banner/banner1.png'),
            },
            {
                src: require('@/assets/image/home/banner/banner2.png'),
            },
            {
                src: require('@/assets/image/home/banner/banner3.png'),
            },
        ],
        roomTypeList: [
            {
                id: 1,
                roomType: 'Single Room',
                src: require('@/assets/image/home/room_type/type1.png'),
                priceWeekdays: 1380,
                priceWeekend: 1500,
            },
            {
                id: 2,
                roomType: 'Deluxe Single Room',
                src: require('@/assets/image/home/room_type/type2.png'),
                priceWeekdays: 1890,
                priceWeekend: 2000,
            },
            {
                id: 3,
                roomType: 'Double Room',
                src: require('@/assets/image/home/room_type/type3.png'),
                priceWeekdays: 2460,
                priceWeekend: 2500,
            },
            {
                id: 4,
                roomType: 'Deluxe Room',
                src: require('@/assets/image/home/room_type/type4.png'),
                priceWeekdays: 2888,
                priceWeekend: 3000,
            },
            {
                id: 5,
                roomType: 'Twin Room',
                src: require('@/assets/image/home/room_type/type5.png'),
                priceWeekdays: 3350,
                priceWeekend: 3500,
            },
            {
                id: 6,
                roomType: 'Deluxe Twin Room',
                src: require('@/assets/image/home/room_type/type6.png'),
                priceWeekdays: 3899,
                priceWeekend: 4000,
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {
        drawer,
    },
})
