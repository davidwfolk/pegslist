<template>
  <div class="car border col-3" @click="selectCar()">
    <img class="img-fluid" :src="carData.imgUrl" alt="" srcset="">
    <h3><strong>{{carData.make}}</strong></h3>
    <h5>{{carData.model}}</h5>
  </div>
</template>

<script>
  export default {
    name: "car",
    props: ["carData"],
    data() {
      return {

      }
    },
    methods: {
      selectCar() {
        this.$=
        this.$router.push({
          name: "CarDetails",
          params: {carId: this.carData._id}
        })
      },
    }
  }
</script>

<style>
  .cars {
    outline: 1px solid black;
  }
</style>