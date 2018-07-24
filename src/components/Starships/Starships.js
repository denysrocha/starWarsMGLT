export default {
  name: 'Starships',
  data () {
    return {
      distance: 0,
      starships: [],
      results: [],
      starship_selected: null
    }
  },
  methods: {
    getStarships () {
      this.$http.get('https://swapi.co/api/starships/').then((response) => {
  			this.starships = response.data.results
  		}).catch(e => {
  			alert(JSON.stringify(e))
  		})
    },
    calculateStops () {
      console.log('entrou')
      this.results = []
      for (var i = 0; i < this.starships.length; i++) {
        this.starships[i].stops = this.returnStops(this.distance, this.starships[i].MGLT, this.starships[i].consumables)
        this.starships[i].img = require('../../assets/img/' + this.starships[i].name + '.png')
        this.results.push(this.starships[i])
      }
    },
    returnStops (distance, mglt, time) {
      return Math.round(distance / (mglt * this.returnHours(time)))
    },
    returnHours (string) {
      var unit = string.split(' ')[1]
      var number = parseInt(string.split(' ')[0])
      if (unit == 'year' || unit == 'years') {
        return (number * 365) * 24
      }
      if (unit == 'month' || unit == 'months') {
        return (number * 30) * 24
      }
      if (unit == 'week' || unit == 'weeks') {
        return (number * 7) * 24
      }
      if (unit == 'day' || unit == 'days') {
        return number * 24
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getStarships()
  }
}
