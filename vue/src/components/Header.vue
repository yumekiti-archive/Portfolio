<template>
    <v-app-bar
        app
        color="white"
        elevate-on-scroll
    >
        <v-toolbar-title @click="this.home">{{this.$store.state.string.jp.title}}</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon :href="this.$store.state.string.link.twitter" target="_blank" rel="noopener noreferrer">
            <v-icon>mdi-twitter</v-icon>
        </v-btn>

        <v-btn icon :href="this.$store.state.string.link.github" target="_blank" rel="noopener noreferrer">
            <v-icon>mdi-github</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        home(){
            if(this.$route.path != '/'){
                this.$router.push('/')
            }
        }
    }
}
</script>