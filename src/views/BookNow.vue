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
                <v-row class="px-10 py-3" align="center">
                    <v-col cols="12" class="text-h4 font-weight-bold">Almost done!</v-col>
                    <v-col cols="12">
                        <div class="mb-3">
                            您將預訂的房型為<span
                                class="ml-3 text-h4 font-weight-bold"
                                style="border-bottom:1px solid #000000"
                                >{{ 'sadas' }}</span
                            >
                        </div>
                        <div>請填寫以下資料，即可完成訂房。</div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col class="booknow__form-item" cols="12" md="4">
                                <div class="booknow__form-label">真實姓名</div>
                                <div>
                                    <input
                                        class="px-4"
                                        type="text"
                                        style="border: 1px solid #D1C8C3;box-sizing:border-box"
                                    />
                                </div>
                            </v-col>
                            <v-col class="booknow__form-item" cols="12" md="4">
                                <div class="booknow__form-label">Check In</div>
                                <div>
                                    <button class="date-block__btn" @click="selectDateRange">
                                        <span style="letter-spacing: 2px;">{{ startDate }}</span>
                                        <v-icon right color="#000000">
                                            mdi-calendar-range
                                        </v-icon>
                                    </button>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col class="booknow__form-item" cols="12" md="4">
                                <div class="booknow__form-label">手機號碼</div>
                                <div>
                                    <input
                                        class="px-4"
                                        type="text"
                                        style="border: 1px solid #D1C8C3;box-sizing:border-box"
                                    />
                                </div>
                            </v-col>
                            <v-col class="booknow__form-item" cols="12" md="4">
                                <div class="booknow__form-label">Check Out</div>
                                <div>
                                    <button class="date-block__btn" @click="selectDateRange">
                                        <span style="letter-spacing: 2px;">{{ endDate }}</span>
                                        <v-icon right color="#000000">
                                            mdi-calendar-range
                                        </v-icon>
                                    </button>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6">
                        1
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

.booknow__form-item {
    .booknow__form-label {
        padding-left: 12px;
        position: relative;
        &::before {
            content: '*';
            position: absolute;
            top: 0;
            left: 0;
            color: #c91616;
        }
    }
    .date-block__btn {
        border: 1px solid #d1c8c3;
        box-sizing: border-box;
    }
    input {
        padding: 5px 15px;
    }
}
</style>
