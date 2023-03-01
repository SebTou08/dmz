import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

// import CSS resources
import 'primevue/resources/primevue.min.css'            // core
import 'primevue/resources/themes/saga-blue/theme.css'  // theme
import 'primeicons/primeicons.css'                      // icons
import '/node_modules/primeflex/primeflex.css'          // PrimeFlex
import Dialog from 'primevue/dialog';

import Button from 'primevue/button'  // import Button component
import VirtualScroller from 'primevue/virtualscroller';


import './assets/main.css'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import {PrimeIcons} from "primevue/api";
import TabMenu from 'primevue/tabmenu';
import Menubar from 'primevue/menubar';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';


const app = createApp(App)

app.use(router)
app.use(ToastService);
app.use(PrimeVue);
app.component('Button', Button)  // register Button component
app.component('Dialog', Dialog)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('TabMenu', TabMenu)
app.component('VirtualScroller', VirtualScroller)
app.component('Menubar', Menubar)
app.component('Toast', Toast)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.mount('#app')
