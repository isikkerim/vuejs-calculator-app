<template>
    <v-container class="text-center my-4">
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card elevation="8" class="pa-4">
            <v-card-title class="text-h5">Contact</v-card-title>
            <v-list>
              <v-list-item>
                <v-icon color="primary" class="mr-2">mdi-linkedin</v-icon>
                <a
                  href="https://www.linkedin.com/in/kerim-i%C5%9F%C4%B1k-b47892211/"
                  target="_blank"
                  >LinkedIn Profile</a
                >
              </v-list-item>
  
              <v-list-item>
                <v-icon color="primary" class="mr-2">mdi-github</v-icon>
                <a href="https://github.com/isikkerim" target="_blank"
                  >GitHub Profile</a
                >
              </v-list-item>
  
              <v-list-item>
                <v-icon color="primary" class="mr-2">mdi-medium</v-icon>
                <a href="https://medium.com/@isikkerim" target="_blank"
                  >Medium Blog</a
                >
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup></script>
  
  <style scoped>
  a {
    text-decoration: none;
    color: #1976d2;
    font-weight: bold;
  }
  </style>
  