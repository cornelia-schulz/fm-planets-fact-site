<template>
  <div class="mars">
    <Navbar />
    <Planet planet="Mars"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Mars',
  components: {
    Navbar,
    Planet
  }
}
</script>