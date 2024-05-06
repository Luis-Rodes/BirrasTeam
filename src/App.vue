
<script setup>

</script>

<template>
  <header>
    <div class="container text-center px-4">
      <div class="row align-items-start gx-5">
       <div class="col px-3">
          <img alt="Birras Team logo" class="rounded  mt-2 ms-3" src="./assets/BirrasTeam.jpg" width="125" height="125" />

    
    </div>
    
    <div class="col px-3">
     
      <h1 class="mt-3">Birras Team Pádel</h1>
      </div>
      <div class="col px-3">
      
        <nav class="navbar navbar-expand-lg bg-body-tertiary mt-3">
          <div class="container-fluid">
        
            <a class="navbar-brand"><router-link :to="'/'" >Inicio</router-link></a>
            
            
        
        <a class="navbar-brand nav-link active"><router-link :to="'/PlantillaDeJugadores'" >Plantilla De Jugadores</router-link></a>
        <a class="navbar-brand nav-link "><router-link :to="'/SobreNosotros'" >Sobre Nosotros</router-link></a>
        <a class="navbar-brand nav-link "><router-link :to="'/Palmares'" >Palmares</router-link></a>
        </div>
        
        
        </nav>
        
      
      </div>
      </div>
    </div>
  
  <router-view>

    
  </router-view> 
  
</header>
 
</template>

 <style scoped>

</style>
 