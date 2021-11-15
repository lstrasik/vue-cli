<template>
  <v-navigation-drawer
      v-model="drawer"
      app
  >
    <v-list-item class="amber darken-2 text-center">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Kudrna.cz
        </v-list-item-title>
        <v-list-item-subtitle>
          Cestovka s duší
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list
        dense
        nav
    >
      <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    drawer:{
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        return this.$store.dispatch('setDrawer', val);
      },
    }
  },
  mounted() {
    console.log(this.drawer);
  },
  data() {
    return {
      items: [
        { title: 'Informace', icon: 'mdi-information-outline', to: '/Informace' },
        { title: 'Registrace', icon: 'mdi-plus-box', to: '/Registration' },
        { title: 'Zajezdy', icon: 'mdi-airplane', to: '/' },
        { title: 'Destinace', icon: 'mdi-home', to: '/Destinace' },
      ],
    }
  }
}
</script>