
<script setup>

</script>

<template>
  <header>
    <div class="container-fluid text-center bg-image" style="background-image: url('../src/assets/Castillo.jpg');
            width:auto">
      
     
      <div class="row align-items-start gx-3 arriba">
       <div class="col px-3">
          <img alt="Birras Team logo" class="rounded  mt-2 ms-3" src="./assets/BirrasTeam.jpg" width="125" height="125" />

    
    </div>
    
    <div class="col px-3">
     
      <h1 class="mt-3 display-1 text-dark">Birras Team Pádel</h1>
      </div>
      <div class="col px-3">
      
        <nav class="navbar navbar-expand-lg bg-transparent-tertiary mt-3 link-dark">
          <div class="container-fluid">
        
            <a class="navbar-brand link-dark"><router-link :to="'/'" >Inicio</router-link></a>
            
            
        
        <a class="navbar-brand nav-link link-dark"><router-link :to="'/PlantillaDeJugadores'" >Plantilla De Jugadores</router-link></a>
        <a class="navbar-brand nav-link link-dark"><router-link :to="'/SobreNosotros'" >Sobre Nosotros</router-link></a>
        <a class="navbar-brand nav-link link-dark"><router-link :to="'/Palmares'" >Palmares</router-link></a>
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
.arriba {
  background-image: url("./assets/Castillo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
 