import { createApp } from 'vue';
import './assets/main.css'
import App from './App.vue';

import 'primeicons/primeicons.css'
import PrimeVue from "primevue/config";

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';



createApp(App)
    .use(PrimeVue, {ripple: true})
    .use(ToastService)
    .component('pv-toast', Toast)
    .mount('#app')
