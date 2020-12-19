<template>
    <div>
        <v-footer color="#F8F1EA">
            <v-container class="py-10">
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-row class="fill-height" justify="space-around" align="center" justify-sm="start"
                            align-sm="start">
                            <v-col class="pb-0" cols="12" sm="6">
                                <v-row class="fill-height">
                                    <v-col cols="6" sm="12">
                                        <v-row class="pr-3 pr-sm-0 ml-0" justify="end" justify-sm="start">
                                            <div class="pl-4" style="border-left:2px solid #95908C;font-size:36px;">
                                                <div style="line-height: 27px;margin-bottom: 1rem;">LOFT</div>
                                                <div style="line-height: 27px;">HOME</div>
                                            </div>
                                        </v-row>
                                    </v-col>
                                    <v-col class="mt-4 pb-0" cols="6" sm="12">
                                        <div>
                                            <v-icon size="2.5rem" color="#000000">mdi-facebook</v-icon>
                                            <v-icon class="ml-3" size="2.5rem" color="#000000">mdi-instagram</v-icon>
                                            <v-icon class="ml-3" size="2.5rem" color="#000000">mdi-twitter</v-icon>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col class="pt-5 pt-sm-1" cols="8" sm="6">
                                <div class="font-weight-light text-center text-sm-left">台北市中山區長春路777號3樓</div>
                                <div class="font-weight-light mt-2 text-center text-sm-left">Mail: lofthome@mail.com
                                </div>
                                <div class="font-weight-light mt-2 text-center text-sm-left">Tel: +886 2 2777-77772
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-row class="fill-height pt-2" justify="center" align="start" justify-sm="end" align-sm="end">
                            <span>Copyright © 2019 LOFT HOME</span>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </div>
</template>
<script>
    export default {
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }),
    }
</script>