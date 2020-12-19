<template>
    <div>
        <v-carousel hide-delimiters height="calc(100vh - 64px)">
            <v-carousel-item v-for="(img, i) in bannetImgList" :key="i" :src="img.src"></v-carousel-item>
        </v-carousel>
        <v-container class="pt-8 pb-5">
            <div class="text-h5">Room type</div>
            <v-row class="pt-5 pb-12 px-2">
                <v-col class="pa-1" v-for="(room, n) in roomTypeList" :key="n" cols="12" md="4">
                    <ImageCard :src="room.src" :roomType="room.roomType" />
                </v-col>
            </v-row>
        </v-container>
        <Calendar />
    </div>
</template>

<script>
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
}
</script>
