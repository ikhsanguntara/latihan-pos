<template>
  <v-app>
    <AppBar />

    <Drawer />
  </v-app>
</template>


<script>
import AppBar from "./components/core/AppBar";
import Drawer from "./components/core/Drawer";
export default {
  name: "DashboardIndex",

  components: {
    AppBar,
    Drawer,
  },
  data: () => ({
      expandOnHover: false,
    }),
};
</script>