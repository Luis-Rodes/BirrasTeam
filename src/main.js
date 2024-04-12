// import './assets/main.css'

import { createApp } from 'vue'
// Importación de la librería 'vue-router'
import * as VueRouter from 'vue-router';
import App from './App.vue'
//Enlaces para las paginas
import PaginaPrincipal from './components/Inicio.vue'
import SobreNosotros from './components/SobreNosotros.vue'
import PlantillaJugadores from './components/PlantillaJugadores.vue'
//Rutas de la App
const rutas = [
    {path: '/', component: PaginaPrincipal },
    {path: '/components/SobreNosotros/' , component: SobreNosotros},
    {path: '/PlantillaJugadores/' , component: PlantillaJugadores}
]

// Creación del router
const router = VueRouter.createRouter({
    // Utilización del método "hash" para crear las URLs
    history: VueRouter.createWebHashHistory(),
    // Indicación de las rutas a utilizar
    routes: rutas
})

// Creación de la aplicación
const app = createApp(App);

// Configuración de la aplicación para que utilice el router
app.use(router)

// Montaje de la aplicación
app.mount('#app')