import { createApp } from "vue";
import App from "./App.vue";
// Styles
import "./styles/main.scss";

// Components
import BaseCmp from "./components/Base.vue";

const app = createApp(App);

// Register global components
app.component("BaseCmp", BaseCmp);

app.mount("#app");
