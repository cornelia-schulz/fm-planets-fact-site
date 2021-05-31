<template>
  <div class="neptune">
    <Navbar />
    <Planet planet="Neptune"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Neptune',
  components: {
    Navbar,
    Planet
  }
}
</script>