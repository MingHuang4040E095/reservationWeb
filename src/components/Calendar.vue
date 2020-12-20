<template>
    <div class="calendar">
        <div class="year-month">
            <span class="previous-btn" @click="previousHandler"></span>
            <span class="font-weight-black label-year" @click="monthListStatus = !monthListStatus">
                {{ nowYear }}
                <template v-if="!monthListStatus">
                    {{ months[nowMonth].text }}
                </template>
            </span>
            <span class="next-btn" @click="nextHandler"></span>
        </div>
        <div class="date-block" v-if="!monthListStatus">
            <v-row class="text-center font-weight-medium date-header">
                <v-col>Sun</v-col>
                <v-col>Mon</v-col>
                <v-col>Tue</v-col>
                <v-col>Wed</v-col>
                <v-col>Thu</v-col>
                <v-col>Fri</v-col>
                <v-col>Sat</v-col>
            </v-row>

            <v-row class="text-center date-content" v-for="row in weeks" :key="row.currentWeek">
                <v-col v-for="cells in row.week" :key="cells">
                    <button class="date">
                        {{ cells }}
                    </button>
                </v-col>
            </v-row>
        </div>

        <!-- 選月份 -->
        <v-row class="text-center month-block" v-if="monthListStatus">
            <v-col
                class="month px-1 py-3"
                cols="3"
                v-for="(month, index) in months"
                :key="month.value"
                @click="changeMonth(index)"
                >{{ month.text }}</v-col
            >
        </v-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            monthListStatus: false,
            months: [
                { text: 'Jan', value: '01' },
                { text: 'Feb', value: '02' },
                { text: 'Mar', value: '03' },
                { text: 'Apr', value: '04' },
                { text: 'May', value: '05' },
                { text: 'Jun', value: '06' },
                { text: 'Jul', value: '07' },
                { text: 'Aug', value: '08' },
                { text: 'Sep', value: '09' },
                { text: 'Oct', value: '10' },
                { text: 'Nov', value: '11' },
                { text: 'Dec', value: '12' },
            ],
            thisYear: new Date().getFullYear(), // 今年
            thisMonth: new Date().getMonth(), //當前月份

            nowYear: new Date().getFullYear(), //現在所選的年份
            nowMonth: new Date().getMonth(), //現在所選的月份 0 ~ 11 ，從0開始 0 === 1月 .... 11 === 12月

            weekNum: 0, //這個月有幾週
            weeks: [],

            startDate: null, //開始的日子
            endDate: null, //結束的日子
        }
    },
    computed: {},
    methods: {
        getYearRange() {
            // alert(this.nowYear)
        },
        changeMonth(month) {
            this.nowMonth = month
            this.buildCalendar(this.nowYear, this.nowMonth)
            this.monthListStatus = false
        },
        //上一個月/年
        previousHandler() {
            if (this.monthListStatus) {
                /**
                 * 如果月份的清單被打開，代表點擊箭頭的時候要去變更年份
                 */
                this.nowYear = this.nowYear - 1
            } else {
                this.previousMonth()
            }
        },
        //下一個月/年
        nextHandler() {
            if (this.monthListStatus) {
                /**
                 * 如果月份的清單被打開，代表點擊箭頭的時候要去變更年份
                 */
                this.nowYear = this.nowYear + 1
            } else {
                this.nextMonth()
            }
        },
        //上個月
        previousMonth() {
            this.nowMonth = this.nowMonth - 1
            if (this.nowMonth < 0) {
                //如果小於0 代表要回到上一年的12月，12月的話要 this.month要等於 11
                this.nowMonth = 11
                this.nowYear = this.nowYear - 1
                this.buildCalendar(this.nowYear, this.nowMonth)
            } else {
                this.buildCalendar(this.nowYear, this.nowMonth)
            }
        },
        //下個月
        nextMonth() {
            this.nowMonth = this.nowMonth + 1
            if (this.nowMonth > 11) {
                //如果大於11 代表要去下一年的1月，1月的話要 this.month要等於 0
                this.nowMonth = 0
                this.nowYear = this.nowYear + 1
                this.buildCalendar(this.nowYear, this.nowMonth)
            } else {
                this.buildCalendar(this.nowYear, this.nowMonth)
            }
        },
        //計算萬年曆
        buildCalendar(year, month) {
            this.weeks = [] //清空陣列

            //取得第一天是在禮拜幾
            let firstDay = new Date(year, month, 1).getDay()
            //取得每個月的最後一天
            let lastDay = (() => {
                let d = new Date(year, month, 1)
                d.setMonth(d.getMonth() + 1)
                d.setDate(0)
                return d.getDate()
            })()
            //計算這個月一共有幾週
            let weekNum = this.calculationWeekNum(firstDay, lastDay)

            //需要的格子數
            let colsTotal = weekNum * 7 //全部需要的格數
            let colsArray = [] //存放所有的日期
            for (let cols = 1 - firstDay; cols <= colsTotal; cols++) {
                if (cols > 0 && cols <= lastDay) colsArray.push(cols)
                else colsArray.push(null)
            }

            //切割陣列 每7個為一個陣列
            for (let week = 1; week <= weekNum; week++) {
                let array = colsArray.slice(7 * (week - 1), week * 7)
                this.weeks.push({
                    year: this.nowYear,
                    month: this.nowMonth, //一月 = 0 、 二月 = 1
                    currentWeek: week,
                    week: array,
                })
            }
            console.log(this.weeks)
        },
        /**
         *  firstDay 第一天從星期幾開始
         *  daysNum  這個月一共有幾天
         */
        calculationWeekNum(firstDay, daysNum) {
            //星期日、星期一、 .... 、星期五 、星期六 分別為 0 1 2 3 4 5 6
            //firstDay 如果為 1 的話代表星期一
            /**
             *   如果這個月第一天在星期六(firstDay=6)且有31天(daysNum=31)的話，需要 6 來做顯示(會跑到37這個位置)，
             *   所以用 firstDay + daysNum 推算出最後一天在哪一格 => 6+31 = 37
             *   一個禮拜會有7天，所以再用 37 / 7 如果餘數不等於 0 就再加 1
             *   Sun    Mon     Tue     Wed     Thu     Fri     Sat
             *    1      2       3       4       5       6       7
             *    8      9      10      11      12      13      14
             *   15     16      17      18      19      20      21
             *   22     23      24      25      26      27      28
             *   29     30      31      32      33      34      35
             *   36     37      38      39      40      41      42
             */
            let weekNum
            //如果除以7後餘數為0，就是剛好有幾週
            if ((firstDay + daysNum) % 7 === 0) weekNum = (firstDay + daysNum) / 7
            //否則代表有餘數，那就要再加一週
            else weekNum = (firstDay + daysNum) / 7 + 1
            //回傳前記得轉成整數
            return parseInt(weekNum)
        },
    },
    mounted() {
        this.getYearRange()
        this.buildCalendar(this.nowYear, this.nowMonth)
    },
}
</script>
<style lang="scss" scoped>
.calendar {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    max-width: 400px;
    background: #ffffff;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 20px 15px;

    .year-month {
        position: relative;
        text-align: center;
        font-weight: bolder;
        margin-bottom: 10px;
        .label-year {
            cursor: pointer;
        }
        .previous-btn {
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 20%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            display: inline-block;
            border: 8px solid;
            border-color: transparent #000000 transparent transparent;
        }
        .next-btn {
            cursor: pointer;
            position: absolute;
            top: 50%;
            right: 20%;
            transform: translate(50%, -50%);
            width: 0;
            height: 0;
            display: inline-block;
            border: 8px solid;
            border-color: transparent transparent transparent #000000;
        }
    }

    .date-block {
        .date-content {
            .date {
                // font-size: 28px !important;
                width: 30px;
                height: 30px;
                display: inline-block;
                border-radius: 50%;
                padding: 0;
                &:focus {
                    outline: 0;
                    border: none;
                }
                &:hover {
                    background-color: #f8f1ea;
                    color: #969696;
                }
            }
        }
    }

    .month-block {
        .month {
            cursor: pointer;
            box-sizing: border-box;
        }
    }
}
</style>
