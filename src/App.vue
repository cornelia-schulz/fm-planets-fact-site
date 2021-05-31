<template>
  <router-view/>
</template>

<style lang="scss">
@import './scss/variables/colours.scss';

body {
  background: $dark-blue;
  color: $white;
}
#app {
  font-family: 'Antonio', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
