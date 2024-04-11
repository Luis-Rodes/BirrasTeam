<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Proyecto creado para Birras Team Padel
      <p><router-link :to="'/PlantillaJugadores.vue/'" >Plantilla jugadores</router-link></p>
      <p><router-link :to="'/Welcomeitem.vue/'" >Enlace2</router-link></p>
      <p><router-link :to="'/'" >Enlace Principal</router-link></p>
      
      <a href="#" target="_blank" rel="noopener">Sobre Nosotros</a> +
      <a href="#" target="_blank" rel="noopener">Plantilla de Jugadores</a>.
    </h3>
  </div>
</template>

<style scoped>
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
