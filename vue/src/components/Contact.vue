<template>
  <div class="ct">
    <v-container>
      <h2 class="ct-title">Contact</h2>
      <p style="word-wrap: break-word" v-text="this.$store.state.main.jp.contact"></p>
      <v-row class="mt-5" cols="12">
        <v-col sm="4">
          <v-icon class="mx-3">mdi-twitter</v-icon>
          <a :href="this.$store.state.main.link.twitter" target="_blank" rel="noopener noreferrer"
            >Twitter</a
          >
        </v-col>
        <v-col sm="4">
          <v-icon class="mx-3">mdi-github</v-icon>
          <a :href="this.$store.state.main.link.github" target="_blank" rel="noopener noreferrer"
            >Github</a
          >
        </v-col>
        <v-col sm="4">
          <p style="word-wrap: break-word" v-text="this.$store.state.main.link.email"></p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  nane: 'Contact',
};
</script>

<style scoped>
.ct {
  padding: 30px 0;
  text-align: center;
}

.ct-title {
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
}

.img {
  border-radius: 50%;
}

a {
  text-decoration: none;
}
</style>
