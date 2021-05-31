<template>
  <div class="venus">
    <Navbar />
    <Planet planet="Venus"/>
  </div>
</template>

<script>
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