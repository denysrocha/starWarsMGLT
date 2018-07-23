<template>
  <div>
    <input type="text" name="" value="" v-model="distance">
    <button type="button" name="button" v-on:click="calculateStops">Calculate stops</button>
    <br>
    <div v-for="r in results">Starship: {{ r.name }} - MGLT: {{ r.MGLT }} - stops: {{ r.stops }}</div>

  </div>
</template>

<script src="./Starships.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
