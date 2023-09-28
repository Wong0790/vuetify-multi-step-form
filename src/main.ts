/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import StepButtonDesktop from "./components/steps/StepButtonDesktop.vue";
import StepButtonMobile from "./components/steps/StepButtonMobile.vue";
import ArcadeIcon from "./components/svg/ArcadeIcon.vue";
import AdvanceIcon from "./components/svg/AdvanceIcon.vue";
import ProIcon from "./components/svg/ProIcon.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";

// Tailwind CSS
import "./styles/styles.css";

const app = createApp(App);

app
  .component("StepButtonDesktop", StepButtonDesktop)
  .component("StepButtonMobile", StepButtonMobile)
  .component("ArcadeIcon", ArcadeIcon)
  .component("AdvanceIcon", AdvanceIcon)
  .component("ProIcon", ProIcon);

registerPlugins(app);

app.mount("#app");
