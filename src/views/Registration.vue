<template>
    <div class="pa-10 font-weight-medium">Registrace</div>
    <v-subheader class="pl-10 font-weight-small">Registrací získáváte možnost vyhrát zájezd za 60 000 Kč!</v-subheader>
    
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="firstName"
              :rules="firstNameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastName"
              :rules="lastNameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn text color="grey" @click="validate">
          <span>Vytvořit účet</span>
        </v-btn>
      </v-form>
    </v-container>
</template>

<script>
  export default {
    name: 'Registration',
    data() {
      return {
        valid: false,
        firstName: null,
        firstNameRules: [
          v => !!v || 'First name is required',
        ],
        lastName: null,
        lastNameRules: [
          v => !!v || 'First name is required',
        ],
        email: null,
        emailRules: [
          v => !!v || 'Email is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(v) || 'E-mail must be valid',
        ],
      }
    },
    methods:{
      validate(){
        this.$refs.form.validate();
        if (this.$refs.form.validate()) {
          this.send();
        }
      },
      send(){
        const data = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        }

      }
    }
  }
</script>