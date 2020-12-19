import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import drawer from '@/store/drawer.js'
export default new Vuex.Store({
  state: {
    //共用的圖片
    bannetImgList: [{
        src: require('@/assets/image/home/banner/banner1.png')
      },
      {
        src: require('@/assets/image/home/banner/banner2.png')
      },
      {
        src: require('@/assets/image/home/banner/banner3.png')
      }
    ],
    roomTypeList: [{
        id: 1,
        roomType: 'Single Room',
        src: require('@/assets/image/home/room_type/type1.png')
      },
      {

        id: 2,
        roomType: 'Deluxe Single Room',
        src: require('@/assets/image/home/room_type/type2.png')
      },
      {
        id: 3,
        roomType: 'Double Room',
        src: require('@/assets/image/home/room_type/type3.png')
      },
      {
        id: 4,
        roomType: 'Deluxe Room',
        src: require('@/assets/image/home/room_type/type4.png')
      },
      {
        id: 5,
        roomType: 'Twin Room',
        src: require('@/assets/image/home/room_type/type5.png')
      },
      {
        id: 6,
        roomType: 'Deluxe Twin Room',
        src: require('@/assets/image/home/room_type/type6.png')
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {
    drawer
  }
});