<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-if="token"  v-model="drawer" app clipped>
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
          <template v-slot:append>
        <div class="pa-2">
          <v-btn outlined block color="accent" @click="logout">
            <v-icon class="mr-2">mdi-exit-to-app</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- app bars -->
    <v-app-bar v-if="token" app color="primary" dark clipped-left clipped-right>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="minn-width: 150px">Hospital Apps</v-toolbar-title>
        <v-spacer />
           <div style="width:320px">
        <v-text-field
          flat
          dense
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
        />
      </div>
      <v-btn class="ml-1" icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    
    <!-- Content -->
    <v-main>
      <v-container class="fill-height pa-0" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>


      
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";


export default {
  name: "App",

  data: () => ({
    drawer: null,
    item: null,
    items: [
      { title: "Dasboard", icon: "mdi-view-dashboard", link: "/dashboard" },
      {
        title: "Master",
        icon: "mdi-database",
        items: [
          {
            title: "Products",
            icon: "mdi-hospital-building",
            link: "/products"
          },
          { title: "Doctor", icon: "mdi-account", link: "/doctor" },
          { title: "Patient", icon: "mdi-account-box", link: "/patient" }
        ]
      },
      {
        title: "Setting",
        icon: "mdi-wrench",
        items: [
          { title: "User", icon: "mdi-account-key", link: "/user" },
         { title: "Change Password", icon: "mdi-lock", link: "/change" },
        ]
      }
    ]
  }),
    methods: {
    ...mapActions(["logout"]),
  },

  computed: {
    ...mapGetters(["token"]),
  },

};
</script>

<style>

</style>
