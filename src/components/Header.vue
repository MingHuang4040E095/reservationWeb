<template>
    <div>
        <v-app-bar color="white" :fixed="true">
            <!-- v-toolbar-title 標題 -->
            <v-toolbar-title>
                <div class="logo pl-2" @click="backHome">
                    <div style="line-height: 20px;margin-bottom: 0.5rem;">LOFT</div>
                    <div style="line-height: 15px;">HOME</div>
                </div>
            </v-toolbar-title>

            <!-- 在v-spacer上面的標籤會在左邊，下面的標籤會在右邊 -->
            <v-spacer></v-spacer>
            <!-- 在md以下(不包含md)的時候隱藏 -->
            <v-row class="d-none d-md-flex" align="center">
                <v-spacer></v-spacer>
                <v-btn text :to="{ name: 'About' }">ABOUT</v-btn>
                <v-btn text :to="{ name: 'Rooms' }">ROOMS</v-btn>
                <v-btn text>CONTACT</v-btn>
                <v-btn class="ma-2 rounded-sm" outlined color="#9CCC65">BOOK NOW</v-btn>
                <div>
                    <v-select
                        v-model="language"
                        :items="languageList"
                        item-text="text"
                        item-value="value"
                        label="Language"
                        outlined
                        dense
                        hide-details
                        style="width:120px;"
                    >
                    </v-select>
                </div>
            </v-row>
            <!-- v-app-bar-nav-icon 漢堡選單 -->
            <v-app-bar-nav-icon class="d-sm-inline-block d-md-none" @click="openDrawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <Drawer />
    </div>
</template>
<script>
import Drawer from '@/components/Drawer.vue'
export default {
    components: {
        Drawer,
    },
    data: () => ({
        language: null,
        //'EN', '中文', '한국어'
        languageList: [
            {
                text: 'EN',
                value: '1',
            },
            {
                text: '中文',
                value: '2',
            },
            {
                text: '한국어',
                value: '3',
            },
        ],
    }),
    methods: {
        openDrawer() {
            this.$store.commit('drawer/setDrawerStatus', true)
        },
        //回到首頁
        backHome() {
            this.$router.push({
                name: 'Home',
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.logo {
    cursor: pointer;
    border-left: 2px solid #95908c;
}
</style>
