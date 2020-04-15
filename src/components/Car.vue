<template>
  <div class="car border col-3">
    <img class="img-fluid" :src="carData.imgUrl" alt="" srcset="">
    <h3><strong>{{carData.make}}</strong></h3>
    <h5>{{carData.model}}</h5>
    <button class="btn btn-danger mb-1" @click="deleteCar()">Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'car',
    props: ["carData"],
    data() {
      return {

      }
    },
    methods: {
      selectCar() {
        this.$store.commit("setActiveCar", {})
        this.push({
          name: "CarDetails",
          params: {carId: this.carData._id}
        })
      },
      deleteCar() {
        this.$store.dispatch("deleteCar", this.carData._id)
      }
    }
  }
</script>

<style>
  .cars {
    outline: 1px solid black;
  }
</style>