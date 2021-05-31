<template>
  <div class="home">
    <Navbar />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Planet planet="Mercury"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Planet
  }
}
</script>
