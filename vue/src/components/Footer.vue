<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="nav" @click="this.top">
                <v-icon>
                    mdi-chevron-up
                </v-icon>
            </v-col>
            <v-col cols="12">
                <footer class="footer">
                    <div>&copy;YUMEKITI</div>
                </footer>
            </v-col>
        </v-row>
    </v-container>
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
    display: flex;
    justify-content: center;
}

.footer{
    text-align: center;
    font-size: 13px;
    margin: 28px;
}

</style>