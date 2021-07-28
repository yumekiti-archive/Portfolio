<template>
    <v-app class="wk">
        <v-container class="my-15">
            <p class="wk-title">WORKS</p>
            <v-row>
                <v-col cols="12" sm="6" v-for="(work, index) in this.works" :key="index">
                    <v-card :to="work.to">
                        <v-img
                            :src="work.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="work.title"></v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'Works',
    computed: {
        works(){
            return this.$store.state.works.works
        },
    }
}
</script>

<style scoped>

.wk{
    background-color: aliceblue;
}

.wk-title{
    text-align: center;
    font-size: 80px;
    margin-bottom: 50px;
}

</style>