<template>
  <div class="container well">
    <center><img src="../../assets/img/star_wars_logo.png" alt="" height="100px;" id="logo"></center>
  	<div class="row">
  		<div class="col-md-12">
  			<h4 for="distance">Inform the distance to be traveled by each starship</h4>
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
    <div class="container results">
      <transition name="component-fade" mode="out-in">
        <div class="row" v-if="starship_selected == null && pilot_selected == null && homeworld == null">
            <div class="col-md-6 results-item" v-for="r in results" v-bind:key="r.name">
              <div class="row">
                <div class="col-md-4">
                  <div class="box">
            			<img :src="r.img" alt="" class="img" name="starship-img">
                  </div>
                </div>
                <div class="col-md-7">
                  <label for="starship-img">Starship {{ r.name }}</label>
                  <p>Stops: {{ r.stops }}</p>
                  <button class="btn btn-info btn-sm" v-on:click="selectStarship(r)">+ Details</button>
                </div>
              </div>
        	</div>
    	  </div>
      </transition>
      <transition name="component-fade" mode="out-in">
        <div v-if="starship_selected != null && pilot_selected == null && homeworld == null">
          <button type="button" name="button" class="btn btn-info" v-on:click="starship_selected = null">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </button>
          <div class="row">
            <div class="col-md-6">
              <div class="box-selected">
                <img :src="starship_selected.img" alt="" class="img-selected" name="starship-img">
              </div>
            </div>
            <div class="col-md-4">
              <h3>Starship: {{ starship_selected.name }}</h3>
              <h4><strong>Stops: {{ starship_selected.stops }}</strong></h4>
              <hr>
              <p>Model: {{ starship_selected.model }}</p>
              <p>Manufacturer: {{ starship_selected.manufacturer }}</p>
              <p>Cost in credits: {{ starship_selected.cost_in_credits }}</p>
              <p>Length: {{ starship_selected.length }}</p>
              <p>Max atmosphering speed: {{ starship_selected.max_atmosphering_speed }}</p>
              <p>Crew: {{ starship_selected.crew }}</p>
              <p>Passengers: {{ starship_selected.passengers }}</p>
              <p>Cargo capacity: {{ starship_selected.cargo_capacity }}</p>
              <p>Consumables: {{ starship_selected.consumables }}</p>
              <p>Hyperdrive rating: {{ starship_selected.hyperdrive_rating }}</p>
              <p>MGLT: {{ starship_selected.MGLT }}</p>
              <p>Starship class: {{ starship_selected.starship_class }}</p>
            </div>
          </div>
          <div class="row">
          	<div class="col-md-3 pilots" v-for="pilot in pilots">
          		<div class="box box-pilots">
            		<img :src="pilot.img" alt="" class="img img-pilots" name="pilot-img">
              </div>
              <button type="button" class="btn btn-sm btn-info btn-pilot" v-on:click="pilot_selected = pilot">{{ pilot.name }}</button>
          	</div>
          </div>
        </div>
      </transition>
      <transition name="component-fade" mode="out-in">
        <div class="" v-if="pilot_selected != null && homeworld == null">
          <button type="button" name="button" class="btn btn-info" v-on:click="pilot_selected = null">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </button>
          <div class="row">
            <div class="col-md-6">
              <div class="box-selected">
                <img :src="pilot_selected.img" alt="" class="img-selected" name="starship-img">
              </div>
            </div>
            <div class="col-md-4">
              <h3>Pilot: {{ pilot_selected.name }}</h3>
              <hr>
              <p>Height: {{ pilot_selected.height }}</p>
              <p>Mass: {{ pilot_selected.mass }}</p>
              <p>Hair_color: {{ pilot_selected.hair_color }}</p>
              <p>Skin_color: {{ pilot_selected.skin_color }}</p>
              <p>Eye color: {{ pilot_selected.eye_color }}</p>
              <p>Birth year: {{ pilot_selected.birth_year }}</p>
              <p>Gender: {{ pilot_selected.gender }}</p>
              <button type="button" class="btn btn-sm btn-info" v-on:click="selectHomeWorld(pilot_selected)">Homeworld</button>
            </div>
          </div>
        </div>
      </transition>
      <transition name="component-fade" mode="out-in">
        <div class="" v-if="homeworld != null">
          <button type="button" name="button" class="btn btn-info" v-on:click="homeworld = null">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          </button>
          <div class="row">
            <div class="col-md-6">
              <div class="box-selected">
                <img :src="homeworld.img" alt="" class="img-selected" name="starship-img">
              </div>
            </div>
            <div class="col-md-4">
              <h3>Homeworld: {{ homeworld.name }}</h3>
              <hr>
              <p>Rotation period: {{ homeworld.rotation_period }}</p>
              <p>Orbital period: {{ homeworld.orbital_period }}</p>
              <p>Diameter: {{ homeworld.diameter }}</p>
              <p>Climate: {{ homeworld.climate }}</p>
              <p>Gravity: {{ homeworld.gravity }}</p>
              <p>Terrain: {{ homeworld.terrain }}</p>
              <p>Surface water: {{ homeworld.surface_water }}</p>
              <p>Population: {{ homeworld.population }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>


  </div>
</template>

<script src="./Starships.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono');

#logo{
  margin-bottom: 10px;
}

.btn-pilot{
  margin-top: 10px;
}

.pilots{
  text-align: center;
}
.img-pilots{
  margin-left: -96px !important;
}
.box-pilots{
  margin: auto !important;
}

.results-item{
	padding: 10px;
}

.results-item:hover{
	background-color: rgba(255,255,255,0.1);
}

hr {
  border-top: 1px solid rgba(255,255,255,0.4);
}

.box-selected{
  margin-left: 20px;
  overflow: hidden;
  width: 400px;
  height: 400px;
  clear: both;
  margin-bottom: 20px;
  transition: 0.2s ease;
  border: 2px solid rgba(255,255,255,0.5);
  margin-top: 20px;
}

.img-selected{
  position: relative;
  max-height: 400px;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  transition: 0.2s ease;
}

.form-control{
  background-color: rgba(255,255,255,0.1);
  color: white;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.btn-info {
  background-color: rgba(0,0,0,0.5);
  border-color: yellow;
  color: yellow;
  transition: 0.2s ease;
}

.btn-info:hover{
  background-color: rgba(255,255,0,0.5);
  color: white;
}

.results {
  max-height: 600px;
  overflow-y: auto;
  overflow-x: hidden;
}

.box{
  margin-left: 20px;
  overflow: hidden;
  width: 100px;
  height: 100px;
  clear: both;
  border-radius: 100%;
  margin-bottom: 20px;
  transition: 0.2s ease;
  border: 2px solid rgba(255,255,255,0.5);
}

.img{
  position: relative;
  max-height: 100px;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
  transition: 0.2s ease;
}

.img:hover{
  max-height: 150px;
  margin-left: -70px;
  margin-top: -70px;
  transition: 0.2s ease;
}

.starships {
  max-height: 50px;
}

.container{
	max-width: 1000px;
  min-height: 600px;
}

.well{
	background-color: rgba(0, 0, 0, 0.4);
	box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.7);
  	color: yellow;
  	overflow-y: auto;
  	overflow-x: hidden;
	font-family: 'Share Tech Mono', monospace;
}

</style>
