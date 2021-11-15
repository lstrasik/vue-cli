<template>
  <v-app-bar
      color="primary"
      dark
      src="fuji.jpg"
      height="200px"
      class="appbar"
      app
  >


    <v-app-bar-nav-icon class="black--text ml-3" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title class="black--text font-weight-bold" >Procestujte s námi svět!</v-toolbar-title>

    <v-toolbar elevation="0" width="100%" tile dense absolute flat >
      <v-spacer/>
      <v-toolbar-title class="white--text" >Procestujte s námi svět!</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>

  </v-app-bar>
</template>

<script>

export default {
  name: "Navbar",
  computed: {
    drawer:{
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        return this.$store.dispatch('setDrawer',
            val
        );
      },
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.appbar >>> .v-toolbar__content {
  padding: 0px !important;
}
</style>