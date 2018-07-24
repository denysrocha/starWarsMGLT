<template>
  <div class="container well">
  	<div class="row">
  		<div class="col-md-12">
  			<label for="distance">Inform the distance to be traveled</label>
  		</div>
  	</div>
  	<div class="row">
  		<div class="col-md-9">
  			<input class="form-control" type="text" name="distance" v-model="distance">
  		</div>
  		<div class="col-md-3">
  			<button class="btn btn-info pull-right" type="button" name="button" v-on:click="calculateStops">Calculate stops</button>		
  		</div>
  	</div>
  	<hr>
    <div class="row" v-for="r in results">
		<div class="col-md-6">
			Starship: {{ r.name }}	
		</div>
		<div class="col-md-2">
			Stops: {{ r.stops }}
		</div> 
	</div>

  </div>
</template>

<script src="./Starships.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
	max-width: 600px;
}

.well{
	background-color: rgba(255, 255, 255, 0.9);
	box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.7);
}

</style>
