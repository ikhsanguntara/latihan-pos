<template>
  <!-- Navigation Drawer -->

  <v-navigation-drawer v-model="drawer" :expand-on-hover="expandOnHover" app clipped>
    <v-list nav dense>
      <v-list-item-group v-model="item" color="primary">
        <div v-for="item in items" :key="item.title">
          <!-- If Menu contains Sub Menu -->
          <v-list-group v-if="item.items" :prepend-icon="item.icon">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="subItem in item.items" :key="subItem.title" :to="subItem.link">
              <v-list-item-icon>
                <v-icon v-text="subItem.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <!-- If Menu don't contains Sub Menu -->
          <v-list-item v-else :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

  <!-- Navigation Drawer -->
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Drawer",
  props: {
    expandOnHover: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    item: null,
    items: [
      { title: "Dasboard", icon: "mdi-view-dashboard", to: "/" },
      {
        title: "Master",
        icon: "mdi-database",
        items: [
          {
            title: "Category",
            icon: "mdi-hospital-building",
            link: "/category",
          },
        ],
      },
    ],
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
};
</script>

<style>
</style>