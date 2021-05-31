<template>
  <div class="venus">
    <Navbar />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Planet planet="Venus"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Venus',
  components: {
    Navbar,
    Planet
  }
}
</script>