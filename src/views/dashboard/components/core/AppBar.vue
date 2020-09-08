<template>
      <!-- App Bars -->
    <v-app-bar app color="primary" dark clipped-left clipped-right>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="minn-width: 150px">Latihan API</v-toolbar-title>
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
    <!-- App Bars -->
</template>

<script>
export default {
name: 'AppBar'
}
</script>

<style>

</style>