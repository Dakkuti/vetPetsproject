<template>
  <div class="container">
    <ul class="row" v-for="(item, index) in data" :key="index">
      <li class="col">
        <img :src="item.img" class="imgpets" alt="img" />
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Carousel",
  props: {
    data: {
      type: Array,
    },
  },

  mounted() {
    console.log(this.data);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
li {
  list-style: none;
  flex: 1 0 0%;
}
.imgpets {
  width: 34vh;
  height: 25vh;
}
</style>