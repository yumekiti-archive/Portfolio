<template>
    <v-app>
        
        <Header
            scroll-target="#scrolling"
            :title="this.$store.state.main.jp.title"
            :twitter="this.$store.state.main.link.twitter"
            :github="this.$store.state.main.link.github"
        />

        <v-main id="scrolling">
            <MainVisual />
            <Works />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </v-main>

    </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import MainVisual from '@/components/MainVisual.vue'
import Works from '@/components/Works.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Portfolio',
    components:{
        Header,
        MainVisual,
        Works,
        Skills,
        About,
        Contact,
        Footer,
    },
}
</script>
