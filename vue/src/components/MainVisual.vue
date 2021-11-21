<template>
    <v-app class="mv">
        <v-container>
            <v-row cols="12" class="row">
                <v-col sm="6">
                    <img class="img" width="300" height="300" :src="$store.state.string.img.mv" alt="photo">
                </v-col>
                <v-col sm="6">
                    <ul v-for="(lidata, index) in lidatas" :key="index">
                        <li class="title">{{lidata.title}}</li>
                        <li>{{lidata.text}}</li><br>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "MainVisual",
    data(){
        return{
            lidatas:[
                { title: 'Name', text: this.$store.state.string.jp.name },
                { title: 'MainSkill', text: this.$store.state.string.jp.skill },
                { title: 'Job', text: this.$store.state.string.jp.job },
            ]
        }
    },
}
</script>

<style scoped>

.row{
    display: flex;
    justify-content: center;
    margin: 8% 0;
    text-align: center;
}

ul {
  list-style: none;
}

li {
    font-size: 28px;
    padding-right: 0.4em;
}

.title {
    opacity: 0.5;
}

.img{
    border-radius: 50%;
}

</style>