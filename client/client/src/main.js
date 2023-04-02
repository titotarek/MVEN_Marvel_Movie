// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";

// createApp(App).use(router).mount("#app");


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import axios from "axios";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
	locale: "en",
	fallbackLocale: "en",
	messages: {
		en: require("./lang/en.json"),
		es: require("./lang/es.json"),

		// en: require("./components/lang/en.json"),
		// es: require("./components/lang/es.json"),
		// es: require("./lang/es.json"),
	},
});
// app.config.globalProperties.$http = axios
createApp(App).use(i18n).use(router).mount("#app");
