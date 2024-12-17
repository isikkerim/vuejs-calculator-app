<template>
    <v-container class="text-center my-5">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <!-- Sayfa Başlığı -->
          <v-card elevation="4" class="pa-4 rounded-lg">
            <v-card-title class="text-h4 font-weight-bold primary--text">
              About Calculator App
            </v-card-title>
  
            <!-- İçerik -->
            <v-card-text class="text-body-1 mt-3">
              Welcome to the **Calculator App** built with the latest modern technologies:
              <ul class="my-3 text-left">
                <li>
                  <strong>Vue.js 3:</strong> Progressive JavaScript framework for building UIs.
                </li>
                <li>
                  <strong>Vuetify:</strong> A powerful Material Design component library.
                </li>
                <li>
                  <strong>Pinia:</strong> State management library for Vue applications.
                </li>
              </ul>
              This app features a simple, yet intuitive calculator along with other pages
              like **Home**, **About**, and **Contact**. The design is responsive and works seamlessly on
              both **mobile** and **desktop** devices.
            </v-card-text>
  
            <!-- GitHub Bağlantısı -->
            <v-card-actions class="justify-center">
              <v-btn
                href="https://github.com/isikkerim"
                target="_blank"
                color="primary"
                outlined
                rounded
              >
                Visit GitHub Repository
                <v-icon right>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup></script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 8px 0;
  }
  
  .v-card {
    background-color: #f9fafb;
  }
  </style>
  