<template>
  <div class="wk">
    <Header />

    <v-container>
      <v-row cols="12" class="row">
        <v-col sm="6">
          <v-img :src="work.src" />
        </v-col>
      </v-row>
      <v-row cols="12" class="row">
        <v-col sm="12">
          <p class="title">{{ this.work.title }}</p>
          <p class="text">
            {{ this.workdetail.text }}
          </p>
          <p>
            URL :
            <a :href="this.workdetail.url" target="_blank" rel="noopener noreferrer">{{
              this.workdetail.url
            }}</a>
          </p>
          <div class="exit">
            <v-icon @click="$router.push('/')">mdi-arrow-left</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Work',
  components: {
    Header,
    Footer,
  },
  computed: {
    work() {
      return this.$store.state.work.works.filter((data) => data.id == this.$route.query.id)[0];
    },
    workdetail() {
      return this.$store.state.workdetail.works.filter(
        (data) => data.id == this.$route.query.id,
      )[0];
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  text-align: center;
}

.text {
  text-align: left;
  display: inline-block;
  white-space: pre-line;
}

.exit {
  text-align: left;
}
</style>
