/* eslint-disable vue/multi-word-component-names */
// import { createApp } from 'vue';
// import PrimeVue from 'primevue/config';
// import App from './App.vue';


// createApp(App).use(router).use(PrimeVue).mount('#app');
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
// import Button from 'primevue/button';
// import Toast from 'primevue/toast';
// import ToastService from 'primevue/toastservice';
import router from './router';
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
// app.use(ToastService);
app.use(router);

// app.component('Button', Button);
// app.component('Toast', Toast);

app.mount('#app');
