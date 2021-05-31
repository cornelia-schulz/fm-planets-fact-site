<template>
  <div class="uranus">
    <Navbar />
    <Planet planet="Uranus"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Uranus',
  components: {
    Navbar,
    Planet
  }
}
</script>