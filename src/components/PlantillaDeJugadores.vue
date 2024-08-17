<script setup>
 
</script>

<template>
    <div class="greetings">
      <div class="contenido" oncontextmenu='return false' ondragstart='return false'
      onmousedown='return false' onselectstart='return false'>
          <p class="text-center px-4"> Plantilla Jugadores Birras Team</p>
          <div class="row row-cols-1 row-cols-md-3 px-2">
            <div class="col mb-3">
              <div class="card border-success text-center" style="width: 18rem;">
                <img src="../assets/yo.jpg" class="card-img-top" alt="Luis Rodes">
                <div class="card-body">
                  <h5 class="card-title">Luis Rodes</h5>
                  <p class="card-text">Jugador de derecha intentando que no salga mi lado de jugador de reves y Capitan del equipo</p>
                </div>
                <div class="card-footer text-muted">
                  <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Palmares personal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Palmares personal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul>
        <li>Campeón liga Wupa Invierno 5ª</li>
        <li>CAmpeón liga Match 5ª</li>
        </ul>
        <p>Campeón liga Wupa Invierno 5ª</p>
        <p>Campeón liga Match 5ª</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> X </button>
      </div>
    </div>
  </div>
</div>

                </div>
              </div>
            </div>
            <div class="col mb-3">
              <div class="card border-success text-center" style="width: 18rem;">
                <img src="../assets/Crash.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
            <div class="col mb-3">
              <div class="card border-success text-center" style="width: 18rem;">
                <img src="../assets/Crash.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div class="col mb-3">
              <div class="card border-success text-center" style="width: 18rem;">
                <img src="../assets/Crash.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
</template>
<style scoped>
</style>