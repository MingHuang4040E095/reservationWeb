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
        <Calendar v-show="visibleCalendar" @close="closeCalendar" @setDate="getDate" />
    </div>
</template>
<script>
import Calendar from '@/components/Calendar.vue'
export default {
    components: {
        Calendar,
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
