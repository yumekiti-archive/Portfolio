<template>
  <div>
    <v-col cols="12" class="nav" @click="this.top">
      <v-icon> mdi-chevron-up </v-icon>
    </v-col>
    <v-col cols="12">
      <footer class="footer">
        <p>&copy;{{ this.footer }}</p>
      </footer>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    footer: String,
  },
  methods: {
    top() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #D8EEFE;
  font-size: 40px;
  display: flex;
  justify-content: center;
}

.footer {
  text-align: center;
  font-size: 13px;
  margin: 28px;
}
</style>
