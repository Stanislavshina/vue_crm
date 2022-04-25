<template>
  <v-app>
    <v-app-bar flat
      app 
    >
    <v-btn to="/Dashboard" plain :ripple="false">
      Dashboard
    </v-btn>
    <v-btn to="/calc" plain :ripple="false">
      Calc
    </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
