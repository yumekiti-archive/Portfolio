<template>
    <v-app class="mv">
        <v-container class="container">
            <img width="300" height="300" :src="$store.state.string.img.mv" alt="photo">
            
            <ul>
                <li>Name: {{this.$store.state.string.jp.name}}</li><br>
                <li>MainSkill: {{this.$store.state.string.jp.skill}}</li><br>
                <li>Job: {{this.$store.state.string.jp.job}}</li><br>
            </ul>

        </v-container>
    </v-app>
</template>

<style scoped>

.container{
    display: flex;
    justify-content: center;
    margin: 100px 0;
}

ul {
  list-style: none;
}

</style>