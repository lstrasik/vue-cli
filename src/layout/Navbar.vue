<template>
  <v-app-bar
      app
      color="primary"
      dark
      src="fuji.jpg"
      height="200px"
  >


    <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title class="black--text font-weight-bold" >Procestujte s námi svět!</v-app-bar-title>


    <v-spacer></v-spacer>

  </v-app-bar>
</template>

<script>
// import {mapState} from "vuex";

export default {
  name: "Navbar",
  computed: {
    drawer:{
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        // console.log(val)
        return this.$store.dispatch('setDrawer',
            val
        );
      },
    }
  },
  mounted() {
    console.log(this.drawer);
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>