import './assets/main.css'

import { createApp } from 'vue'
// Importación de la librería 'vue-router'
import * as VueRouter from 'vue-router';
import App from './App.vue'
//Enlaces para las paginas
import PaginaPrincipal from './components/HelloWorld.vue'
import PaginaEquipo from './components/TheWelcome.vue'
import PlantillaJugadores from './components/PlantillaJugadores.vue'
//Rutas de la App
const rutas = [
    {path: '/', component: PaginaPrincipal },
    {path: '/TheWelcome/' , component: PaginaEquipo},
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