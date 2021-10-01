<template>
    <div>
        <v-row style="background:#D1C8C3;">
            <v-container>
                <v-row class="px-10 py-3" align="center">
                    <v-col cols="6" md="2">
                        <button class="date-block__btn" @click="selectDateRange">
                            <span style="letter-spacing: 2px;">{{ startDate }}</span>
                            <v-icon right color="#000000">
                                mdi-calendar-range
                            </v-icon>
                        </button>
                    </v-col>
                    <v-col cols="6" md="2">
                        <button class="date-block__btn" @click="selectDateRange">
                            <span style="letter-spacing: 2px;">{{ endDate }}</span>
                            <v-icon right color="#000000">
                                mdi-calendar-range
                            </v-icon>
                        </button>
                    </v-col>
                    <v-col cols="6" md="2">
                        <div class="date-block__count d-flex">
                            <button @click="adultsNumCount('minus')">-</button>
                            <div>{{ adultsNum }}</div>
                            <button @click="adultsNumCount('plus')">+</button>
                        </div>
                    </v-col>
                    <v-col cols="6" md="2">
                        <div class="date-block__count d-flex">
                            <button @click="kidsNumCount('minus')">-</button>
                            <div>{{ kidsNum }}</div>
                            <button @click="kidsNumCount('plus')">+</button>
                        </div>
                    </v-col>
                    <v-col cols="6" md="2">
                        <button class="date-block__btn-search" style="background:#000000;color:#ffffff;">Search</button>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <v-row>
            <v-container>
                <v-row align="end" v-for="room in roomTypeList" :key="room.roomType" style="position:relative">
                    <v-col cols="12" md="4">
                        <ImageCard :src="room.src" :roomType="room.roomType" />
                    </v-col>
                    <v-col class="px-10 px-md-2" cols="12" md="4">
                        <div class="text-h5">Single Room</div>
                        <v-row>
                            <v-col cols="6" class="py-1">人數 : 1</v-col>
                            <v-col cols="6" class="py-1">坪數 : 18平方公尺</v-col>
                            <v-col cols="6" class="py-1">床型 : 單人床</v-col>
                            <v-col cols="6" class="py-1">餐點 : 附早餐</v-col>
                        </v-row>
                        <v-row>
                            <v-col v-for="(service, i) in serviceItems_icon" :key="i" cols="2" md="3" class="pa-2">
                                <v-responsive :aspect-ratio="1">
                                    <div class="fill-height rooms__info">
                                        <v-img class="icon" :contain="true" height="50%" width="50%" :src="service">
                                        </v-img>
                                    </div>
                                </v-responsive>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col class="px-10 px-md-2" cols="12" md="4">
                        <v-row class="pb-0 pb-md-15 font-weight-bold">
                            <v-col class="text-md-right" cols="6" md="12"
                                >平日每晚 <span class="text-h4 d-flex d-sm-inline-flex">$ 1,380</span>
                            </v-col>
                            <v-col class="text-md-right" cols="6" md="12"
                                >假日每晚 <span class="text-h4 d-flex d-sm-inline-flex">$ 1,500</span>
                            </v-col>
                        </v-row>
                        <v-row class="pt-0 pt-md-15">
                            <v-col cols="6">
                                <v-btn class="rounded-sm" @click="dialogVisible = !dialogVisible" block outlined
                                    >MORE +</v-btn
                                >
                            </v-col>
                            <v-col cols="6">
                                <v-btn class="rounded-sm light-green white--text" block outlined>BOOK NOW</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-row>
        <Detail :dialogVisible="dialogVisible" @setDialogVisible="setDialogVisible" />
        <Calendar v-show="visibleCalendar" @close="closeCalendar" @setDate="getDate" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
import ImageCard from '@/components/ImageCard.vue'
import Detail from '@/components/Detail.vue'
import Calendar from '@/components/Calendar.vue'
export default {
    components: {
        ImageCard,
        Detail,
        Calendar,
    },
    computed: {
        ...mapState(['roomTypeList']),
    },
    data() {
        return {
            serviceItems_icon: [
                require('@/assets/image/rooms/fork.svg'),
                require('@/assets/image/rooms/fridge.svg'),
                require('@/assets/image/rooms/no-smoking.svg'),
                require('@/assets/image/rooms/telephone.svg'),
                require('@/assets/image/rooms/toilet.svg'),
                require('@/assets/image/rooms/track.svg'),
                require('@/assets/image/rooms/wifi.svg'),
            ],
            dialogVisible: true,
            adultsNum: 0,
            kidsNum: 0,
            visibleCalendar: false, //是否可見萬年曆
            startDate: '開始日期', //開始日期
            endDate: '結束日期', //結束日期
        }
    },
    methods: {
        //設定詳細資料 dialog 的顯示狀態
        setDialogVisible(newStatus) {
            this.dialogVisible = newStatus
        },
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
.rooms__info {
    background: #d1c8c3;
    position: relative;

    .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        // >.v-image__image {
        //     background-size: contain;
        // }
    }
}
.date-block__btn {
    display: flex;
    background: #ffffff;
    width: 100%;
    // max-width: 150px;
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
    background: #ffffff;
    display: flex;
    justify-content: space-between;
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
    & + .date-block__count {
        margin-left: 1rem;
    }
}
</style>
