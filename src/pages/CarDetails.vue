<template>
  <div class="car-details container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <img class="img-fluid" :src="car.imgUrl" alt srcset />
        <h3>{{car.make}}</h3>
        <h5>{{car.model}}</h5>
        <h6>{{car.price}}</h6>
        <h6>{{car.year}}</h6>
        <button class="btn btn-dark m-1" @click="$router.push({name:'Cars'})">Back</button>
        <button class="btn btn-danger" @click="deleteCar()">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "car-details",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getCar",this.$route.params.carId)
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    }
  },
  methods: {
    deleteCar() {
      this.$router.push({ name: "Cars" });
      this.$store.dispatch("deleteCar", this.car._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>