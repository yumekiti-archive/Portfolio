<template>
    <v-app>
        
        <Header />

        <v-main>
            <MainVisual />
            <Works />
        </v-main>

    </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import MainVisual from '@/components/MainVisual.vue'
import Works from '@/components/Works.vue'

export default {
    name: 'Portfolio',
    components:{
        Header,
        MainVisual,
        Works,
    },
}
</script>
