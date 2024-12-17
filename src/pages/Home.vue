<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-row>
      <v-col cols="12" sm="8" md="6" lg="4" class="mx-auto">
        <v-card elevation="8" class="pa-4">
          <v-card-title class="text-h5 text-center">Calculator</v-card-title>
          <v-text-field
            v-model="display"
            readonly
            label="Result"
            outlined
            dense
            class="mb-4"
          ></v-text-field>

          <v-row dense>
            <v-col v-for="btn in buttons" :key="btn" cols="3">
              <v-btn
                @click="onButtonClick(btn)"
                :color="btn === '=' ? 'success' : 'primary'"
                block
                rounded
              >
                {{ btn }}
              </v-btn>
            </v-col>
          </v-row>

          <v-btn color="error" block class="mt-4" @click="clear">Clear</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const display = ref("");
const buttons = [
  "7", "8", "9", "/", 
  "4", "5", "6", "*", 
  "1", "2", "3", "-", 
  "0", ".", "=", "+"
];

function onButtonClick(btn) {
  if (btn === "=") {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  } else {
    display.value += btn;
  }
}

function clear() {
  display.value = "";
}
</script>

<style scoped>
.v-card {
  border-radius: 15px;
}
.v-btn {
  font-weight: bold;
}
</style>
