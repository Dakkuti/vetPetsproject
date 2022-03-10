<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">VetPets</a>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/">Inicio</router-link>
              <!-- <a class="nav-link active" aria-current="page" href="#">Inicio</a> -->
            </li>
            <li class="nav-item">
              <router-link to="/dog">Perros</router-link>
              <!-- <a class="nav-link" href="#">Perros</a> -->
            </li>
            <li class="nav-item">
              <router-link to="/dog">Gatos</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dog">Otros</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dog">Contacto</router-link>
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
.nav-item {
  color: rgb(255 255 255 / 90%) !important;
  font-weight: bold;
  padding: 8px;
  width: 90px;
}

.nav-item:hover {
  background: #fab2a085;
  padding: 8px;
  width: 90px;
}
.nav-link {
  color: rgb(255 255 255 / 90%) !important;
  font-weight: bold;
}
.navbar-expand-lg .navbar-nav {
  flex-direction: row;
  align-items: center;
}
a {
  text-decoration: none;
  color: #ffffff;
}
</style>