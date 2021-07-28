<template>
    <div class="wk">
        <Header />

        <h2 class="wk-title mb-10">{{this.work.title}}</h2>
        <div class="article-body">
            <p>
                <img :src="work.src" alt="">
            </p>
            <p style="text-align: left; white-space:pre-wrap; word-wrap:break-word;">
                {{this.workdetail.text}}
            </p>
            <h3>URL</h3>
            <p><a :href="this.workdetail.url" target="_blank" rel="noopener noreferrer">{{this.workdetail.url}}</a></p>
            <h3>Charge</h3>
            <p>{{this.workdetail.charge}}</p>
            <h3>Purpose</h3>
            <p>{{this.workdetail.purpose}}</p>
            <h3>Target</h3>
            <p>{{this.workdetail.target}}</p>
            <h3>Particular About</h3>
            <p style="white-space:pre-wrap; word-wrap:break-word;">
                {{this.workdetail.about}}
            </p>
        </div>
        <div class="mb-10 home-link">
            <a href="/">WorksList</a>
        </div>

        <Footer />

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Work',
    components:{
        Header,
        Footer,
    },
    computed: {
        work(){
            return this.$store.state.work.works.filter(data => data.id == this.$route.query.id)[0];
        },
        workdetail(){
            return this.$store.state.workdetail.works.filter(data => data.id == this.$route.query.id)[0];
        }
    }
}
</script>

<style scoped>

.wk{
    text-align: center;
}

.wk-title{
    font-size: 40px;
}

img {
    width: 80%;
    height: 30vh;
}

</style>