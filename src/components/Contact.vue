<template>
  <div class="ct">
    <v-container>
      <h2 class="ct-title">Contact</h2>
      <p style="word-wrap: break-word" v-text="this.contact"></p>
      <v-row class="mt-5" cols="12">
        <v-col sm="4" class="ct-item">
          <v-icon class="mx-3">mdi-twitter</v-icon>
          <a :href="this.twitter" class="mt-1" target="_blank" rel="noopener noreferrer">Twitter</a>
        </v-col>
        <v-col sm="4" class="ct-item">
          <v-icon class="mx-3">mdi-github</v-icon>
          <a :href="this.github" class="mt-1" target="_blank" rel="noopener noreferrer">Github</a>
        </v-col>
        <v-col sm="4" class="ct-item">
          <span class="mt-1" style="word-wrap: break-word" v-text="this.email"></span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  nane: 'Contact',
  props: {
    contact: String,
    email: String,
    github: String,
    twitter: String,
  },
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

.ct-item {
  display: flex;
  align-content: center;
  justify-content: center;
}

.img {
  border-radius: 50%;
}

a {
  text-decoration: none;
}
</style>
