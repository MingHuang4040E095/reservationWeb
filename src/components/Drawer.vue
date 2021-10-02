<template>
    <v-navigation-drawer v-model="drawerStatus" class="drawer-menu" width="400" absolute temporary>
        <v-list-item>
            <v-list-item-content>
                <div class="pl-2" style="border-left:2px solid #95908C;font-size:1.5rem">
                    <div style="line-height: 20px;margin-bottom: 0.5rem;">LOFT</div>
                    <div style="line-height: 15px;">HOME</div>
                </div>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title class="text-subtitle-1" @click="goPage(item.routeName)">{{
                        item.title
                    }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
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
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            setdrawerStatus: (state) => state.drawer.drawerStatus,
        }),
        //陣列用法
        // ...mapState('drawer',['drawerStatus']),
        drawerStatus: {
            get() {
                return this.setdrawerStatus
            },
            //因為是綁在v-model，所以v-model直改變時，要用set去抓變動的值，然後把他commit到vuex去更改他的狀態
            set(newStatus) {
                this.$store.commit('drawer/setDrawerStatus', newStatus)
                // return newStatus
            },
        },
    },
    data() {
        return {
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
            items: [
                {
                    title: 'Home',
                    icon: 'mdi-home',
                    routeName: 'Home',
                },
                {
                    title: 'About',
                    icon: 'mdi-account-supervisor-circle',
                    routeName: 'About',
                },
                {
                    title: 'Rooms',
                    icon: 'mdi-forum',
                    routeName: 'Rooms',
                },
            ],
        }
    },
    methods: {
        goPage(routeName, query = {}) {
            this.$router.push({
                name: routeName,
                query: query,
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.drawer-menu {
    position: fixed;
    height: 100vh;
    top: 0px;
    left: 0px;
}
</style>
