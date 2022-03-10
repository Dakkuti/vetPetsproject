<template>
  <div>
    <navbar-vue></navbar-vue>
    <div class="containerLogin">
      <p>Inicia Sesión</p>
      <b-form inline>
        <label class="sr-only" for="inline-form-input-name">Usuario</label>
        <b-form-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="@User"
          required
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username"
          >Contraseña</label
        >

        <b-form-input
          id="inline-form-input-password"
          placeholder="Contraseña"
          type="password"
          required
        ></b-form-input>

        <br />
        <b-button type="submit" variant="primary">Save</b-button>

        <router-link :to="{ name: 'Register' }" class="mt-2 goBack"
          >¿Aún no tienes cuenta? Registrate aqui</router-link
        >
      </b-form>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/main/Navbar.vue";
export default {
  name: "Login",
  components: {
    NavbarVue,
  },
};
</script>

<style scoped>
.containerLogin {
  margin-top: 7%;
}
.form-inline {
  width: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
}
</style>
