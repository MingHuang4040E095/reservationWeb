<template>
    <div class="calendar">
        <!-- <button @click="buildCalendar(nowYear, nowMonth)">111</button> -->
        <div class="year-month">
            <span class="previous-month"></span>
            {{ nowYear }} {{ months[nowMonth].text }}
            <span class="next-month"></span>
        </div>
        <v-row class="text-center">
            <v-col>Sun</v-col>
            <v-col>Mon</v-col>
            <v-col>Tue</v-col>
            <v-col>Wed</v-col>
            <v-col>Thu</v-col>
            <v-col>Fri</v-col>
            <v-col>Sat</v-col>
        </v-row>

        <v-row class="text-center" v-for="row in weeks" :key="row.currentWeek">
            <v-col v-for="cells in row.week" :key="cells">
                {{ cells }}
            </v-col>
        </v-row>

        <!-- 選月份 -->
        <!-- <v-row class="text-center">
			<v-col cols="3" v-for="month in months" :key="month.value">{{ month.text }}</v-col>
		</v-row> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
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
            nowYear: new Date().getFullYear(), //現在的年份
            nowMonth: new Date().getMonth(), //現在的月份 0 ~ 11 ，從0開始 0 === 1月 .... 11 === 12月

            firstDay: null, //星期幾開始 0~6
            lastDay: null, //最後一天是幾號   可以用來當這個月有幾天
            weekNum: 0, //這個月有幾週
            weeks: [],
        }
    },
    computed: {},
    methods: {
        getYearRange() {
            // alert(this.nowYear)
        },
        buildCalendar(year, month) {
            //取得第一天是在禮拜幾
            this.firstDay = new Date(year, month, 1).getDay()
            //取得每個月的最後一天
            this.lastDay = (() => {
                let d = new Date(year, month, 1)
                d.setMonth(d.getMonth() + 1)
                d.setDate(0)
                return d.getDate()
            })()
            //計算這個月一共有幾週
            let weekNum = this.calculationWeekNum(this.firstDay, this.lastDay)

            //需要的格子數
            let colsTotal = weekNum * 7 //全部需要的格數
            let colsArray = [] //存放所有的日期
            for (let cols = 1 - this.firstDay; cols <= colsTotal; cols++) {
                if (cols > 0 && cols <= this.lastDay) colsArray.push(cols)
                else colsArray.push(null)
            }

            //切割陣列 每7個為一個陣列
            for (let week = 1; week <= weekNum; week++) {
                let array = colsArray.slice(7 * (week - 1), week * 7)
                this.weeks.push({
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
        // this.buildCalendar(2021, 0)
        console.log(new Date().getMonth())
    },
}
</script>
<style lang="scss">
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
        .previous-month {
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
        .next-month {
            position: absolute;
            top: 50%;
            left: 80%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            display: inline-block;
            border: 8px solid;
            border-color: transparent transparent transparent #000000;
        }
    }

    > table {
        width: 100%;

        td {
            text-align: center;
        }
    }
}
</style>
