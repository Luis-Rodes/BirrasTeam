<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
import SobreNosotros from './SobreNosotros.vue'
</script>

<template>
  <div class="container text-center px-4">
    <div class="row align-items-start gx-5">
      <div class="col px-3">
  
    <h1 class="green">{{ msg }}</h1>
    </div>
    <div class="col px-3">
    <h3>
      Proyecto creado para Birras Team Padel
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
      
          <a class="navbar-brand"><router-link :to="'/'" >Inicio</router-link></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
      
      <a class="nav-link active"><router-link :to="'/PlantillaJugadores.vue/'" >Plantilla jugadores</router-link></a>
      <a class="nav-link "><router-link :to="'/SobreNosotros.vue/'" >Sobre Nosotros</router-link></a>
      </div>
      </div>
      </div>
      </nav>
      <!-- <a href="#" target="_blank" rel="noopener">Sobre Nosotros</a> +
      <a href="#" target="_blank" rel="noopener">Plantilla de Jugadores</a>. -->
    </h3>
    </div>
    </div>
  </div>
  <SobreNosotros />
</template>

<!-- <style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
 -->