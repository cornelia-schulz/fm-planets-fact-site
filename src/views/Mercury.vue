<template>
  <div class="mercury">
    <Navbar />
    <Planet planet="Mercury"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Planet from '@/components/Planet.vue'

export default {
  name: 'Mercury',
  components: {
    Navbar,
    Planet
  }
}
</script>
