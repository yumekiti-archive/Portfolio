<template>
  <div class="sk">
    <v-container>
      <h2 class="sk-title">SKILL</h2>
      <v-row>
        <v-col cols="12" sm="6" v-for="(skill, index) in this.skills" :key="index">
          <v-card outlined elevation="0">
            <v-list-item>
              <v-icon class="mr-5" style="font-size: 80px">{{ skill.icon }}</v-icon>
              <v-list-item-content class="sk-item">
                <v-list-item-title style="font-size: 30px">{{ skill.name }}</v-list-item-title>
                <v-list-item-subtitle style="font-size: 20px">{{
                  skill.detail
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  nane: 'Skill',
  props: {
    skills: Array,
  },
};
</script>

<style scoped>
.sk {
  padding: 30px 0;
}

.sk-title {
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
}

.sk-item {
  text-align: left;
  height: 100px;
}
</style>
