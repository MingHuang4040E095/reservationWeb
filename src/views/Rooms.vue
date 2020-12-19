<template>
	<div>
		<v-row style="background:#D1C8C3;">
			<v-container>
				<v-row class="px-10 py-3">
					datePicker
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
										<v-img class="icon" :contain="true" height="50%" width="50%" :src="service"> </v-img>
									</div>
								</v-responsive>
							</v-col>
						</v-row>
					</v-col>
					<v-col class="px-10 px-md-2" cols="12" md="4">
						<v-row class="pb-0 pb-md-15 font-weight-bold">
							<v-col class="text-md-right" cols="6" md="12">平日每晚 <span class="text-h4 d-flex d-sm-inline-flex">$ 1,380</span> </v-col>
							<v-col class="text-md-right" cols="6" md="12">假日每晚 <span class="text-h4 d-flex d-sm-inline-flex">$ 1,500</span> </v-col>
						</v-row>
						<v-row class="pt-0 pt-md-15">
							<v-col cols="6">
								<v-btn class="rounded-sm" @click="dialogVisible = !dialogVisible" block outlined>MORE +</v-btn>
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
	</div>
</template>
<script>
import { mapState } from 'vuex'
import ImageCard from '@/components/ImageCard.vue'
import Detail from '@/components/Detail.vue'
export default {
	components: {
		ImageCard,
		Detail,
	},
	computed: {
		...mapState(['roomTypeList']),
	},
	data() {
		return {
			serviceItems_icon: [require('@/assets/image/rooms/fork.svg'), require('@/assets/image/rooms/fridge.svg'), require('@/assets/image/rooms/no-smoking.svg'), require('@/assets/image/rooms/telephone.svg'), require('@/assets/image/rooms/toilet.svg'), require('@/assets/image/rooms/track.svg'), require('@/assets/image/rooms/wifi.svg')],
			dialogVisible: true,
		}
	},
	methods: {
		//設定詳細資料 dialog 的顯示狀態
		setDialogVisible(newStatus) {
			this.dialogVisible = newStatus
		},
	},
}
</script>
<style lang="scss">
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
</style>
