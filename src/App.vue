<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url('http://longwallpapers.com/Desktop-Wallpaper/star-wars-wallpaper-widescreen-For-Desktop-Wallpaper.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
