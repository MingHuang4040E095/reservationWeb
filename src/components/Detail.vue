<template>
    <v-dialog v-model="visible" :width="dialogWidth">
        <v-card>
            <v-row class="mx-0" :style="viewHeight" style="position:relative">
                <div class="text-h3 font-weight-medium" style="position:absolute;top:30px;left:30px;z-index:1">
                    Single Room
                </div>
                <v-img max-width="100%" height="100%" :src="roomImgs[selected]"></v-img>
                <div
                    class="text-h4 font-weight-medium"
                    style="position:absolute;top:auto;left:auto;bottom:30px;right:30px;z-index:1"
                >
                    <div class="mb-7">
                        <span class="text-h6 font-weight-bold mr-4">平日每晚</span>
                        <span class="font-weight-black">$ 1380</span>
                    </div>
                    <div>
                        <span class="text-h6 font-weight-bold mr-4">假日每晚</span>
                        <span class="font-weight-black">$ 1500</span>
                    </div>
                </div>
            </v-row>
            <v-row class="py-3 px-5 py-md-12 px-md-16 mx-0" style="background:#F8F1EA">
                <v-img
                    class="my-1 mx-1 mx-md-6"
                    v-for="(img, index) in roomImgs"
                    :key="img.id"
                    :src="img.src"
                    :max-width="imgWidth"
                    @click="selected = index"
                ></v-img>
            </v-row>
            <v-row class="py-3 px-5 py-md-12 px-md-16 mx-0">
                <v-col class="pa-7" cols="12" md="5">
                    <p class="text-h5 font-weight-bold">房間設備</p>
                    <v-row>
                        <v-col v-for="item in device" :key="item.id" cols="6" md="3" class="pa-2">
                            <v-responsive :aspect-ratio="1">
                                <div class="fill-height rooms__info">
                                    <v-img class="icon" :contain="true" height="50%" width="50%" :src="item.src">
                                    </v-img>
                                </div>
                            </v-responsive>
                            <p class="text-center mt-3">{{ item.label }}</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="pa-7" cols="12" md="5" offset-md="1">
                    <p class="text-h5 font-weight-bold">其他</p>
                    <v-row>
                        <v-col v-for="item in other" :key="item.id" cols="4" md="3" class="pa-2">
                            <v-responsive :aspect-ratio="1">
                                <div class="fill-height rooms__info">
                                    <v-img
                                        class="icon"
                                        :contain="true"
                                        height="50%"
                                        width="50%"
                                        :src="item.src"
                                    ></v-img>
                                </div>
                            </v-responsive>
                            <p class="text-center mt-3">{{ item.label }}</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="py-3 px-5 py-md-12 px-md-16 mx-0">
                <v-col class="py-0 px-7" cols="12">
                    <p class="text-h5 font-weight-bold">簡介</p>
                </v-col>
                <v-col class="py-0 px-7" cols="12">
                    <p class="text-h6 font-weight-light">
                        Single Room is only reserved for one guest. There is a bedroom with a single size bed and a
                        private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and
                        shampoo, hairdryer are provided. In the room there is AC and of course WiFi.
                    </p>
                </v-col>
            </v-row>
            <v-row class="py-3 px-5 py-md-12 px-md-16 mx-0 font-weight-light">
                <v-col class="py-0 px-7" cols="12" md="2">
                    <p class="pl-2 left-border">人數 : 1</p>
                    <p class="pl-2 left-border">床型 : 單人床</p>
                </v-col>
                <v-col class="py-0 px-7" cols="12" md="2">
                    <p class="pl-2 left-border">坪數 : 18平方公尺</p>
                    <p class="pl-2 left-border">餐點 : 附早餐</p>
                </v-col>
                <v-col class="py-0 px-7" cols="12" md="5">
                    <p class="pl-2 left-border">checkIn 時間 : 最早15:00、最晚21:00</p>
                    <p class="pl-2 left-border">checkOut 時間 : 10:00</p>
                </v-col>
            </v-row>
            <v-row class="mx-0" style="background:#D1C8C3;">
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
                            <button class="date-block__btn-search">Search</button>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
        </v-card>
        <Calendar v-show="visibleCalendar" @close="closeCalendar" @setDate="getDate" />
    </v-dialog>
</template>
<script>
import Calendar from '@/components/Calendar.vue'
export default {
    components: {
        Calendar,
    },
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        visible: {
            get() {
                return this.dialogVisible
            },
            set(newStatus) {
                this.$emit('setDialogVisible', newStatus)
            },
        },
        //詳細資料dialog的寬度
        dialogWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return '95%'
                case 'sm':
                    return '90%'
                case 'md':
                    return '80%'
                case 'lg':
                    return '70%'
                case 'xl':
                    return '70%'
            }
        },
        //預覽圖的高度
        viewHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 'height:auto'
                case 'sm':
                    return 'height:auto'
                case 'md':
                    return 'height:auto'
                case 'lg':
                    return 'height:80vh'
                case 'xl':
                    return 'height:90vh'
            }
        },
        //縮圖大小
        imgWidth() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 100
                case 'sm':
                    return 125
                case 'md':
                    return 150
                case 'lg':
                    return 175
                case 'xl':
                    return 200
            }
        },
        //房間設備的icon寬度
        deviceIconWidthHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return 40
                case 'sm':
                    return 50
                case 'md':
                    return 60
                case 'lg':
                    return 70
                case 'xl':
                    return 80
            }
        },
    },
    data() {
        return {
            // dialog_detail: false,
            selected: 0,
            roomImgs: [
                {
                    id: 1,
                    src: require('@/assets/image/detail/singleRoom/singleRoom1.png'),
                },
                {
                    id: 2,
                    src: require('@/assets/image/detail/singleRoom/singleRoom2.png'),
                },
                {
                    id: 3,
                    src: require('@/assets/image/detail/singleRoom/singleRoom3.png'),
                },
            ],
            // require('@/assets/image/rooms/fork.svg'),
            // require('@/assets/image/rooms/fridge.svg'),
            // require('@/assets/image/rooms/no-smoking.svg'),
            device: [
                {
                    id: 1,
                    label: '冰箱',
                    src: require('@/assets/image/rooms/fridge.svg'),
                },
                {
                    id: 2,
                    label: '獨立衛浴',
                    src: require('@/assets/image/rooms/toilet.svg'),
                },
                {
                    id: 3,
                    label: '無線網路',
                    src: require('@/assets/image/rooms/wifi.svg'),
                },
                {
                    id: 4,
                    label: '電話',
                    src: require('@/assets/image/rooms/telephone.svg'),
                },
            ],
            other: [
                {
                    id: 5,
                    label: '早餐',
                    src: require('@/assets/image/rooms/fork.svg'),
                },
                {
                    id: 6,
                    label: '可帶寵物',
                    src: require('@/assets/image/rooms/track.svg'),
                },

                {
                    id: 7,
                    label: '禁菸',
                    src: require('@/assets/image/rooms/no-smoking.svg'),
                },
            ],
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
    created() {},
}
</script>
<style lang="scss" scoped>
/*樣式改變代碼-----------------------------------------------------*/
/* 滾動條整體部分 */
.v-dialog::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #d0cdc7;
}
/* scroll軌道背景 */
.v-dialog::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #d0cdc7;
}

/* 滾動條中能上下移動的小塊 */
.v-dialog::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #a09d9d;
}
.left-border {
    border-left: 2px solid #b1b1b1;
    line-height: 18px;
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
