// @ts-ignore
import { createVuetify } from "vuetify";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "animate.css";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
    components,
    directives,
  });

createApp(App).use(router).use(vuetify).mount("#app");
