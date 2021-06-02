<template>
   <v-app>
    <v-form v-model="valid">
      <v-container>
        <v-row 
          justify="center"
        >
          <v-col
            cols="10"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="10"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="10"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
          <v-col 
            cols="10"
           >
            <v-btn
              class="light-blue--text lighten-3--text"
              depressed
              width="100%"
            >Login</v-btn>
          </v-col>  
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
};
</script>
