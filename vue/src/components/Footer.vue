<template>
    <div>
        <v-icon class="nav" @click="this.top">
            mdi-chevron-up
        </v-icon>
        <footer class="footer">
            <div>&copy;YUMEKITI</div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods:{
        top(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}
</script>

<style scoped>

.nav{
    background-color: #CCFFFF;
    font-size: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.footer{
    text-align: center;
    font-size: 13px;
    margin: 28px;
}

</style>