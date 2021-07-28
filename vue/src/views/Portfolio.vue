<template>
    <v-app>
        
        <Header />

        <v-main>
            <MainVisual />
        </v-main>

    </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import MainVisual from '@/components/MainVisual.vue'

export default {
    name: 'Portfolio',
    components:{
        Header,
        MainVisual,
    },
}
</script>
