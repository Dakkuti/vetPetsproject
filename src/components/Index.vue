<template>
  <div>
    <navbar-vue />

    <div class="containerIndex">
      <div class="containerTitle">
        <img class="logo" alt="Vue logo" :src="img" />

        <p>
          Bienvenido a nuestro pet shop, tenemos diversidad de productos para tu
          animal de compañia ¡Conoce también a nuestros peluditos que resaltaron
          este año! :)
        </p>
      </div>

      <carousel :data="pets" />
    </div>
  </div>
</template>

<script>
import NavbarVue from "./main/Navbar.vue";
import axios from "axios";
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
      imgRandom: [
        require("../assets/dog.gif"),
        require("../assets/bunny.gif"),
        require("../assets/cat.gif"),
        require("../assets/hamster.gif"),
        require("../assets/parrot.gif"),
      ],
      valor: false,
      shown: false,
      selectedImage: null,
      pets: [],
      response: null,
    };
  },
  methods: {
    switchShown() {
      this.shown = !this.shown;
    },

    goToMascotas() {
      this.shown = !this.shown;
      if (this.shown) {
        let random =
          this.imgRandom[Math.floor(Math.random() * this.imgRandom.length)];
        this.img = random;
      } else {
        this.img = require("../assets/pet-shop.png");
      }
    },
  },
  created() {
    //peticion a apijson
    axios
      .get("https://vet-pets.herokuapp.com/pets")
      .then((response) => {
        this.pets = response.data;
        console.log(this.pets);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    let random =
      this.imgRandom[Math.floor(Math.random() * this.imgRandom.length)];
    this.img = random;
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
  width: 285px;
  margin: 40px auto;
}
.containerTitle {
  display: flex;
  align-items: self-end;
  width: 80vh;
  flex-direction: row;
  justify-content: center;
  margin: 0px auto;
  margin-top: 75px;
  margin-bottom: 115px;
}
</style>
