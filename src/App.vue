<template>
  <v-app id="app">
    <sidebar/>
    <navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>
</template>
<script>
import Navbar from "@/layout/Navbar";
import Sidebar from "@/layout/Sidebar";
import Footer from "@/layout/Footer";

export default {
  name: 'app',
  components:{
    Footer,
    Navbar,
    Sidebar
  },
  data() {
    return {
      drawer: false,
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
