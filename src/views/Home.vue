<template>
    <div>
        <v-carousel hide-delimiters height="calc(100vh - 64px)">
            <v-carousel-item v-for="(img, i) in bannetImgList" :key="i" :src="img.src"></v-carousel-item>
            <div class="px-7 py-9 date-block">
                <div>
                    <label class="mb-2 d-block">Check In</label>
                    <button class="mb-5 date-block__btn" @click="selectDateRange">
                        <span style="letter-spacing: 2px;">{{ startDate }}</span>
                        <v-icon right color="#000000">
                            mdi-calendar-range
                        </v-icon>
                    </button>
                </div>
                <div>
                    <label class="mb-2 d-block">Check Out</label>
                    <button class="mb-5 date-block__btn" @click="selectDateRange">
                        <span style="letter-spacing: 2px;">{{ endDate }}</span>
                        <v-icon right color="#000000">
                            mdi-calendar-range
                        </v-icon>
                    </button>
                </div>
                <div class="d-flex justify-space-between align-center mb-10">
                    <div>
                        <label class="mb-2 d-block">Adults</label>
                        <div class="date-block__count d-flex">
                            <button @click="adultsNumCount('minus')">-</button>
                            <div>{{ adultsNum }}</div>
                            <button @click="adultsNumCount('plus')">+</button>
                        </div>
                    </div>
                    <div>
                        <label class="mb-2 d-block">Kids</label>
                        <div class="date-block__count d-flex">
                            <button @click="kidsNumCount('minus')">-</button>
                            <div>{{ kidsNum }}</div>
                            <button @click="kidsNumCount('plus')">+</button>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-center align-center">
                    <button class="date-block__btn-search">Search</button>
                </div>
            </div>
        </v-carousel>
        <v-container class="pt-8 pb-5">
            <div class="text-h5">Room type</div>
            <v-row class="pt-5 pb-12 px-2">
                <v-col class="pa-1" v-for="(room, n) in roomTypeList" :key="n" cols="12" md="4">
                    <ImageCard :src="room.src" :roomType="room.roomType" />
                </v-col>
            </v-row>
        </v-container>
        <Calendar v-show="visibleCalendar" @close="closeCalendar" @setDate="getDate" />
    </div>
</template>
<script>
/**
 7 3 4
 4 3 7
 3 7 4
 3 4 7



 */
import { mapState } from 'vuex'
import ImageCard from '@/components/ImageCard.vue'
import Calendar from '@/components/Calendar.vue'
export default {
    name: 'Home',
    components: {
        ImageCard,
        Calendar,
    },
    computed: {
        ...mapState(['bannetImgList', 'roomTypeList']),
    },
    data() {
        return {
            adultsNum: 0,
            kidsNum: 0,
            visibleCalendar: false, //是否可見萬年曆
            startDate: '開始日期', //開始日期
            endDate: '結束日期', //結束日期
        }
    },
    methods: {
        adultsNumCount(type) {
            if (type === 'plus') this.adultsNum++
            else this.adultsNum--
            if (this.adultsNum < 0) this.adultsNum = 0
        },
        kidsNumCount(type) {
            if (type === 'plus') this.kidsNum++
            else this.kidsNum--
            if (this.kidsNum < 0) this.kidsNum = 0
        },
        //選擇日期範圍
        selectDateRange() {
            this.visibleCalendar = true
        },
        //關閉萬年曆
        closeCalendar(status) {
            this.visibleCalendar = status
        },
        //取得子組件傳過來的日期
        getDate(dataRange) {
            this.startDate = dataRange.startDate
            this.endDate = dataRange.endDate
        },
    },
}
</script>
<style lang="scss" scoped>
.date-block {
    position: absolute;
    top: 0;
    left: 5%;
    background: #ffffffcc;
    width: 270px;

    .date-block__btn {
        display: flex;
        background: #ffffff;
        width: 100%;
        padding: 5px 15px;
        justify-content: space-between;
        align-items: center;
        &:focus {
            outline: none;
        }
    }
    .date-block__btn-search {
        display: inline-block;
        outline: none;
        font-weight: bold;
        letter-spacing: 1px;
        border: 2px solid #000000;
        color: #000000;
        background: transparent;
        padding: 0.5rem 1.5rem;
    }
    .date-block__count {
        height: 30px;
        > div,
        > button {
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        & > button:first-child,
        & > button:last-child {
            color: #ffffff;
            background: #000;

            &:focus {
                border: none;
                outline: none;
            }
        }
    }
}
</style>
