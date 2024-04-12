<script setup>
import Inicio from './components/Inicio.vue'
</script>

<template>
  <header>
    <img alt="Birras Team logo" class="rounded  mt-5 ms-5" src="./assets/BirrasTeam.jpg" width="125" height="125" />

    <div class="wrapper">
      <Inicio msg="Birras Team" />
    </div>
  </header>
  <!--<router-view></router-view> -->
  <p class="text-center px-4">Pagina inicio </p>
  
 
</template>

<!-- <style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
 -->