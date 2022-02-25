<template>
  <div id="app">
    <div class="containerIndex">
      <img class="logo" alt="Vue logo" :src="img" />

      <p>
        Bienvenido a nuestro pet shop, tenemos diversidad de productos para tu
        animal de compañia ¡Conoce también a nuestros peluditos que resaltaron
        este año!
      </p>

      <button class="btn btn-primary">Ver mascotas</button>
    </div>
    <carousel />
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      img: require("../../assets/pet-shop.png"),
    };
  },
};
</script>

<style scoped>
.logo {
  width: 18vh;
  margin-top: 70px;
}

.containerIndex p {
  width: 19%;
  margin: 35px auto;
  font-size: 1.2em;
  font-weight: 500;
}
</style>
