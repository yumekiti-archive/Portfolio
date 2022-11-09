<template>
  <v-app class="mv">
    <v-container>
      <v-row cols="12" class="row">
        <v-col sm="6">
          <img class="img" width="300" height="300" :src="$store.state.main.icon" alt="photo" />
        </v-col>
        <v-col sm="6">
          <ul v-for="(lidata, index) in lidatas" :key="index">
            <li class="title">{{ lidata.title }}</li>
            <li>{{ lidata.text }}</li>
            <br />
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'MainVisual',
  props: {
    name: String,
    skill: String,
    job: String,
  },
  data() {
    return {
      lidatas: [
        { title: 'Name', text: this.name },
        { title: 'MainSkill', text: this.skill },
        { title: 'Job', text: this.job },
      ],
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  margin: 10% 0;
  text-align: center;
}

ul {
  list-style: none;
}

li {
  font-size: 28px;
  padding-right: 0.4em;
}

.title {
  opacity: 0.5;
}

.img {
  border-radius: 50%;
}
</style>
