import { createApp } from "vue";
import App from "./App.vue";
// Styles
import "./styles/main.scss";

// Components
import BaseCmp from "./components/base-cmp.vue";

const app = createApp(App);

// Register global components
app.component("BaseCmp", BaseCmp);

app.mount("#app");
