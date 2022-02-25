<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">VetPets</a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Perros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Gatos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Otros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.bg-light {
  --bs-bg-opacity: 1;
  background-color: #c65a3f !important;
}
.navbar-light .navbar-brand {
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
}
.nav-item,
.nav-link {
  color: rgb(255 255 255 / 90%) !important;
  font-weight: bold;
}
</style>