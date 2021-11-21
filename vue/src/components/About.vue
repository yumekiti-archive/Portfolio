<template>
    <div class="ab">
        <v-container>
            <h2 class="ab-title">About</h2>
            <v-row>
                <v-col cols="12" sm="6">
                    <img class="img" width="100" height="100" :src="$store.state.string.img.about" alt="image">
                </v-col>
                <v-col cols="12" sm="6">
                    <p style="text-align: left; white-space:pre-wrap; word-wrap:break-word;" v-text="this.$store.state.string.jp.about"></p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    nane: 'About',
}
</script>

<style scoped>

.ab{
    background-color: #ccffff;
    padding: 30px 0;
    text-align: center;
}

.ab-title{
    text-align: center;
    font-size: 45px;
    margin-bottom: 50px;
}

.img{
    border-radius: 50%;
}

</style>