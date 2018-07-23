export default {
  name: 'Starships',
  data () {
    return {
      distance: 0,
      starships: {},
      results: []
    }
  },
  methods: {
    getStarships () {
      this.$http.get('https://swapi.co/api/starships/').then((response) => {
  			this.starships = response.data.results
  		}).catch(e => {
  			alert(JSON.stringify(e))
  		}).finally(_ => {
  			//
  		})
    },
    calculateStops () {
      this.results = []
      for (var i = 0; i < this.starships.length; i++) {
        this.results.push({
          name: this.starships[i].name,
          MGLT: this.starships[i].MGLT,
          stops: Math.round(this.distance / this.starships[i].MGLT)
        })
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getStarships()
  }
}
