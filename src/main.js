
import { createApp } from 'vue'
// Importación de la librería 'vue-router'
import * as VueRouter from 'vue-router';
import App from './App.vue'
//Enlaces para las paginas
import PaginaPrincipal from './components/Inicio.vue'
import SobreNosotros from './components/SobreNosotros.vue'
import PlantillaJugadores from './components/PlantillaJugadores.vue'
import Palmares from './components/Palmares.vue'
//Rutas de la App
const rutas = [
    {path: '/', component: PaginaPrincipal },
    {path: '/SobreNosotros/' , component: SobreNosotros},
    {path: '/PlantillaJugadores.vue/' , component: PlantillaJugadores},
    {path: '/Palmares/' , component: Palmares}
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