<template>
  <div id="app">
    <v-app>
      <v-card
        class="mx-auto overflow-hidden"
        height="100vh"
        width="100%"
      >
        <v-app-bar
          color="light-blue darken-2"
          dark
        >
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    
          <v-toolbar-title>Administrador</v-toolbar-title>
        </v-app-bar>
        <router-view></router-view>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
        >
        <v-col>
          <v-avatar color="indigo">
            <v-icon dark>
              mdi-account-circle
            </v-icon>
          </v-avatar>
            <p>Usuario</p>
        </v-col>  
        
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="group"
              active-class="blue darken-3--text text--accent-4"
            >
             <router-link to="/dashboard">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                  <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>
              </router-link>
              <router-link to="/login">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                
                  <v-list-item-title>Login</v-list-item-title>
                
              </v-list-item>
              </router-link>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
      
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
   watch: {
    group () {
      this.drawer = false
    },
  },

}
</script>