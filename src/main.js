import { createApp } from 'vue'
import App from './App.vue'
import posthogPlugin from "./plugins/posthog"; //import the plugin.

// importo il router
import { router } from './router';

// importo bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// importo i font
import '@fontsource/audiowide';

// importo the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBurger, faArrowLeft, faBars, faX } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBurger, faArrowLeft, faBars, faX)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(posthogPlugin)
.mount('#app')
