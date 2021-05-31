<template>
  <nav class="navbar">
    <div class="menu-toggle-container">
      <h1>THE PLANETS</h1>
      <label for="menu-toggle">
        <img src="../assets/icon-hamburger.svg" alt="menu toggle" />
      </label>
      <input type="checkbox" id="menu-toggle"/>
    </div>
    <ul class="menu">
      <li v-for="(planet, index) in planets" :key="index">
        {{ planet }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
    return {
      planets: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    }
  }
})
export default class Navbar extends Vue {
  // planets!: Array<String>
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/variables/colours.scss';

.navbar {
  padding: 16px 24px;
}

h1 {
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
}

.menu-toggle-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

#menu-toggle {
  display: none;
}

.menu {
  background-color: #ffa500;
  width: 780px;
  overflow: hidden;
  max-height: 0;
  padding: 0;
  margin: 0 auto;
  -webkit-transition: all 0.3s ease;
}

#menu-toggle:checked + .menu {
  max-height: 100px;
}
</style>
