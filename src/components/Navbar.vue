<template>
  <nav class="navbar">
    <h1>THE PLANETS</h1>
    <label for="menu-toggle">
      <img src="../assets/icon-hamburger.svg" alt="menu toggle" />
    </label>
    <input type="checkbox" id="menu-toggle"/>
    <ul id="menu">
      <li class="menu-items" v-for="(planet, index) in planets" :key="index">
        <router-link :to="planet.toLowerCase()">
          <span>
            <div class="circle"></div>
            {{ planet }}
          </span>
          <span class="menu-items-chevron">></span>
        </router-link>
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
}
</script>

<style scoped lang="scss">
@import '../scss/variables/colours.scss';

.navbar {
  padding: 16px 24px;
}

h1 {
  display: inline-block;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-align: left;
  width: 50%;
}

#menu-toggle {
  display: none;
}

label {
  display: inline-block;
  text-align: right;
  width: 50%;
}

#menu {
  width: 100%;
  overflow: hidden;
  max-height: 0;
  padding: 0;
  margin: 0 auto;
  -webkit-transition: all 0.3s ease;
}

#menu-toggle:checked + #menu {
  max-height: 100%;
}

.circle {
  background: $light-blue;
  border: 1px solid $light-blue;
  border-radius: 50%;
  display: inline-block;
  height: 12px;
  margin-right: 10px;
  width: 12px;
}

.menu-items {
  border-bottom: 1px solid rgba($color: $white, $alpha: 0.5);
  font-family: Spartan;
  font-size: 15px;
  padding-bottom: 24px;
  padding-top: 24px;
  text-align: left;
  text-transform: uppercase;

  a {
    color: $white;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
  }
}

.menu-items-chevron {
  font-size: 10px;
  opacity: 0.5;
}
</style>
