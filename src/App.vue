<template>
  <v-app>
    <v-app-bar app color="pink" dark>
      <v-toolbar-title>
        <router-link to="/" class="header-link"
          ><span>Music Search</span></router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <span class="mr-2">Home</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.header-link {
  color: white;
  text-decoration: none;
}
</style>
