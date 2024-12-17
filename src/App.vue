<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar app color="primary" dark>
      <v-container class="d-flex justify-space-between align-center">
        <v-toolbar-title>Calculator App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-container>
    </v-app-bar>

    <!-- Sayfa İçeriği -->
    <v-main>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>

<!-- Footer -->
<v-footer app color="primary" dark class="text-center">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <span>&copy; {{ new Date().getFullYear() }} Calculator App</span>
      </v-col>
      <v-col cols="12" md="6">
        <a
          href="https://github.com/isikkerim"
          target="_blank"
          class="text-white text-decoration-none font-weight-bold"
        >
          GitHub Repository
          <v-icon right>mdi-github</v-icon>
        </a>
      </v-col>
    </v-row>
  </v-container>
</v-footer>

  </v-app>
</template>

<script setup></script>

<style>
body {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin: 0;
}
</style>
