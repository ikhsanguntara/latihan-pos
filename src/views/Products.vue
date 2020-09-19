<template>
  <v-container class="backdrop" fluid>
    <v-toolbar flat>
      <v-toolbar-title>Product</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-btn color="accent" dark >Add New</v-btn>
    </v-toolbar>
    <!-- tabs -->
    <div class="tabs mt-5">
      <v-tabs grow background-color="indigo" dark v-model="tab">
        <v-divider class="mx-4" vertical></v-divider>
        <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>

        <v-divider class="mx-4" vertical></v-divider>
      </v-tabs>
    </div>
    <!-- Tab Item -->
      <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <component :is="item.content"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
  </v-container>
</template>

<script>
import ProductList from '../components/ProductList.vue'
import OpsiTambahan from '../components/OpsiTambahan.vue'
import Kategori from '../components/Kategori.vue'

export default {
  name: "Products",

  components: {
    ProductList,
    OpsiTambahan,
    Kategori
  },
  data: () => ({
    tab: null,
    items: [
      { tab: "ProductList", content: "ProductList"},
      { tab: "OpsiTambahan", content: "OpsiTambahan"},
      { tab: "Kategori", content: "Kategori" },
    ],
  }),
};
</script>

<style>
</style>