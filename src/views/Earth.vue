<template>
  <div class="earth">
    <Navbar />
    <Planet planet="Earth"/>
  </div>
</template>

<script>
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