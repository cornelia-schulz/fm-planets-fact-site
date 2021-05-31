<template>
  <div class="saturn">
    <Navbar />
    <Planet planet="Saturn"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Saturn',
  components: {
    Navbar,
    Planet
  }
}
</script>