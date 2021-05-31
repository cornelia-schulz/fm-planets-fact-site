<template>
  <div class="earth">
    <Navbar />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Planet planet="Earth"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Earth',
  components: {
    Navbar,
    Planet
  }
}
</script>