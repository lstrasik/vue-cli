<template>
  <v-footer

      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
    >
      <v-card-title class="teal">

        <v-row>
          <v-col cols="8">
            <strong class="subheading">Zůstaňte s námi ve spojení!</strong>
          </v-col>
          <v-col cols="4">
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4"
                dark
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footbar",
  data(){
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  }
}
</script>