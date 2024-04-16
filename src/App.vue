
<script setup>
// import Inicio from './components/Inicio.vue'
defineProps({
  msg: {
    type: String,
    required: true,
    return: 'Birras Team'
  }
})

</script>

<template>
  <header>
    <div class="container text-center px-4">
      <div class="row align-items-start gx-5">
       <div class="col px-3">
          <img alt="Birras Team logo" class="rounded  mt-2 ms-3" src="./assets/BirrasTeam.jpg" width="125" height="125" />

    
    </div>
    
    <div class="col px-3">
      <!-- <h1 class="green">{{ msg }}</h1> -->
      <h1 class="mt-3">Birras Team Pádel</h1>
      </div>
      <div class="col px-3">
      
        <nav class="navbar navbar-expand-lg bg-body-tertiary mt-3">
          <div class="container-fluid">
        
            <a class="navbar-brand"><router-link :to="'/'" >Inicio</router-link></a>
            
            
        
        <a class=" navbar-brand nav-link active"><router-link :to="'/PlantillaJugadores'" >Plantilla jugadores</router-link></a>
        <a class="navbar-brand nav-link "><router-link :to="'/SobreNosotros'" >Sobre Nosotros</router-link></a>
        <a class="navbar-brand nav-link "><router-link :to="'/Palmares'" >Palmares</router-link></a>
        </div>
        
        
        </nav>
        <!-- <a href="#" target="_blank" rel="noopener">Sobre Nosotros</a> +
        <a href="#" target="_blank" rel="noopener">Plantilla de Jugadores</a>. -->
      
      </div>
      </div>
    </div>
  
  <router-view>

    
  </router-view> 
  
</header>
 
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