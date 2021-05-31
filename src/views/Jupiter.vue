<template>
  <div class="jupiter">
    <Navbar />
    <Planet planet="Jupiter"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Jupiter',
  components: {
    Navbar,
    Planet
  }
}
</script>