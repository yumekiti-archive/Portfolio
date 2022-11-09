<template>
  <div class="wk">
    <Header
      scroll-target="#scrolling"
      :title="this.work.title"
      :twitter="this.$store.state.main.link.twitter"
      :github="this.$store.state.main.link.github"
    />

    <v-img :src="work.img" contain height="200" />
    <v-container>
      <v-row cols="12" class="row">
        <v-col sm="6" class="body" >
          <div class="text" v-html="compiledMarkdown"></div>
          <div class="exit">
            <v-icon @click="$router.push('/')">mdi-arrow-left</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <Footer :footer="this.$store.state.main.footer" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { marked } from 'marked';
import axios from 'axios';

export default {
  name: 'Work',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      work: {},
      compiledMarkdown: '',
    };
  },
  created() {
    const { id } = this.$route.params;
    this.work = this.$store.state.work.works[id];
    axios.get(`https://raw.githubusercontent.com/yumekiti/Portfolio/main/src/contents/${this.work}`)
      .then((res) => {
        this.compiledMarkdown = marked(res.data);
      });
  },
};
</script>

<style scoped>
.body {
  width: 100%;
}
.row {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.text {
  width: 100%;
  text-align: left;
  display: inline-block;
  white-space: pre-line;
}

.exit {
  text-align: left;
}
</style>
