<template>
  <div class="cars col-12">
    <!-- i will build a bunch of car components for each car -->
    <div class="row">
      <car v-for="car in cars" :carData="car" :key="car._id"></car>
      <!-- car deetz go here -->
    </div>
  </div>
</template>

<script>
  import Car from '../components/Car.vue'
  // import CreateCar from '../components/CreateCar.vue'
  export default {
    name: "cars",
    data() {
      return {

      }
    },
    computed: {
      cars() {
        return this.$store.state.cars.sort((a, b) => a.make.charCodeAt(0) - b.make.charCodeAt(0))
      }
    },
    created() {
      this.$store.dispatch("getCars")
    },
    methods: {},
    components: {
      Car
    }
  }
</script>

<style>
  .cars {
    outline: 1px solid black;
  }
</style>