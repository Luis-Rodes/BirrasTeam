
<script setup>

</script>
<template>
  <div class="container text-center px-4">
  <div id="carouselExampleCaptions" class="carousel carousel slide mt-5">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleCaption" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner px-5 mb-5">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="../../src/assets/TrofeoMatch.jpg" class="d-block 50vh" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Liga Match</h5>
          <p>Subcampeones de la liga por parejas.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="../../src/assets/Match-23.jpg" class="d-block 50vh" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Liga Match por equipos</h5>
          <p>Semifinalistas de la liga de invierno 22-23.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../src/assets/Bullpadel-1.jpg" class="d-block 50vh" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Liga BullPadel por equipos</h5>
          <p>Caimos en Octavos desde la Previa, gran torneo.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../src/assets/BirrasTeamCarrusel.jpg" class="d-block 50vh " alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../src/assets/BirrasTeamCarrusel.jpg" class="d-block 50vh" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
</template>

<style scoped>
.carousel-inner img {
  width: 100%;
  max-height: 700px;
}

.carousel-inner{
height: 750px;
}
</style>
 