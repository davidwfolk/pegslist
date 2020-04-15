<template>
  <div class="home container-fluid align-content-center">
    <div class="container-fluid bg-dark bg">
      <div class="row m-auto">
        <div class="col-6 mt-3 mx-auto mb-3 bg-light card border-light">
          <img class="card-img-top" src="holder.js/100px180/" alt="">
          <div class="card-body">
            <h4 class="card-title">Welcome to PegsList</h4>
            <p class="card-text"><router-link to='/cars'>Cars</router-link> | 
            <router-link to='/jobs'>Jobs</router-link> | 
            <router-link to='/houses'>Houses</router-link> | 
            <router-link to='/shoestrings'>Shoestrings</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: { }
  }
</script>

<style>
.bg {
  align-content: center;
  height: 100vh;
}
</style>