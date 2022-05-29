<template>
  <div class="wk">
    <v-container>
      <h2 class="wk-title">WORKS</h2>
      <v-row>
        <v-col cols="12" sm="6" v-for="(work, index) in this.works" :key="index">
          <v-card :to="{ name: 'Work', query: { id: work.id } }">
            <v-img
              :src="work.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="work.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Works',
  computed: {
    works() {
      return this.$store.state.work.works;
    },
  },
};
</script>

<style scoped>
.wk {
  background-color: #ccffff;
  padding: 30px 0;
}

.wk-title {
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
}
</style>
