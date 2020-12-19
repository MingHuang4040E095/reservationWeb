<template>
    <div class="calendar">
        <button @click="buildCalendar(nowYear, nowMonth)">111</button>
        <div class="year-month">{{ nowYear }} {{ months[nowMonth].text }}</div>
        <!-- <table>
			<thead>
				<th>Sun</th>
				<th>Mon</th>
				<th>Tue</th>
				<th>Wed</th>
				<th>Thu</th>
				<th>Fri</th>
				<th>Sat</th>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>2</td>
					<td>3</td>
					<td>4</td>
					<td>5</td>
					<td>6</td>
					<td>7</td>
				</tr>
			</tbody>
		</table> -->
        <v-row class="text-center">
            <v-col>Sun</v-col>
            <v-col>Mon</v-col>
            <v-col>Tue</v-col>
            <v-col>Wed</v-col>
            <v-col>Thu</v-col>
            <v-col>Fri</v-col>
            <v-col>Sat</v-col>
        </v-row>

        <v-row class="text-center" v-for="(row, rowIndex) in weekNum" :key="row">
            <v-col v-for="(cells, cellsIndex) in 7" :key="cells">
                <!-- {{ cells + rowIndex * 7 }} -->
                {{ setDay(cells, rowIndex) }}
            </v-col>
        </v-row>

        <!-- <v-row class="text-center" v-for="(row, rowIndex) in 6" :key="row">
            <v-col v-for="(cells, cellsIndex) in 7" :key="cells">
                {{
                    (() => {
                        for (let i = 1; i < lastDay + 1; i++) {
                            if (cells + rowIndex * 7 >= firstDay + 1) {
                                return i
                            }
                        }
                    })()
                }}
            </v-col>
        </v-row> -->

        <!-- <v-row class="text-center">
			<v-col cols=""></v-col>
		</v-row> -->

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
            // weeks: [
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            // ],
        }
    },
    computed: {},
    methods: {
        getYearRange() {
            // alert(this.nowYear)
        },
        // tableMonths(rowIndex) {
        // 	// rowIndex = rowIndex - 1
        // 	let months = this.months.filter((month, index) => {
        // 		return index < rowIndex * 4 && index >= (rowIndex - 1) * 4
        // 	})
        // 	return months
        // },
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
            this.weekNum = this.calculationWeekNum(this.firstDay, this.lastDay)
            console.log(this.firstDay, this.lastDay)

            // weeks: [
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            //     { days: [1, 2, 3, 4, 5, 6, 7] },
            // ],
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
        //設定日期
        setDay(cells, rowIndex) {
            return '11'
        },
    },
    mounted() {
        this.getYearRange()
        this.buildCalendar(this.nowYear, this.nowMonth)
        // this.buildCalendar(2020, 1)
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
        text-align: center;
        font-weight: bolder;
        margin-bottom: 10px;
    }

    > table {
        width: 100%;

        td {
            text-align: center;
        }
    }
}
</style>
