<template>
  <div>
    <navbar-vue />

    <div class="containerIndex">
      <img class="logo" alt="Vue logo" :src="img" />

      <p>
        Bienvenido a nuestro pet shop, tenemos diversidad de productos para tu
        animal de compañia ¡Conoce también a nuestros peluditos que resaltaron
        este año! :)
      </p>

      <button class="btn btn-primary">Ver mascotas</button>
    </div>
    <carousel />
  </div>
</template>

<script>
import NavbarVue from "./main/Navbar.vue";
import Carousel from "./main/Carousel.vue";

export default {
  name: "Index",
  components: {
    NavbarVue,
    Carousel,
  },
  data() {
    return {
      img: require("../assets/pet-shop.png"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 22vh;
  margin-top: 4%;
}
.containerIndex p {
  font-size: 1.2em;
  width: 20%;
  margin: 40px auto;
}
</style>
