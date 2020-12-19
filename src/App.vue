<template>
	<v-app>
		<Header />
		<v-main class="mt-14">
			<router-view></router-view>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'App',
	components: {
		Header,
		Footer,
	},
}
</script>
<style lang="scss">
//中文語系 U+4E00-9FFF，字體 Noto Sans TC
@font-face {
	font-family: mainfont, sans-serif;
	src: url('https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap');
	unicode-range: U+4E00-9FFF;
}

//英文語系 U+00-024F，字體 Barlow
@font-face {
	font-family: mainfont, sans-serif;
	src: url('https://fonts.googleapis.com/css?family=Barlow&display=swap');
	unicode-range: U+00-024F;
}

* {
	font-family: mainfont, sans-serif !important;
}
/*樣式改變代碼-----------------------------------------------------*/
/* 滾動條整體部分 */
body::-webkit-scrollbar {
	width: 10px;
	height: 10px;
	background-color: #d0cdc7;
}
/* scroll軌道背景 */
body::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: #d0cdc7;
}

/* 滾動條中能上下移動的小塊 */
body::-webkit-scrollbar-thumb {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	background-color: #a09d9d;
}
</style>
